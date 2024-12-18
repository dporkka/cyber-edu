export function analyzeSEO(title: string, description: string, content: string) {
  const suggestions: { type: 'error' | 'warning' | 'success'; message: string }[] = [];

  // Title analysis
  if (!title) {
    suggestions.push({ type: 'error', message: 'Meta title is missing' });
  } else {
    if (title.length < 30) {
      suggestions.push({ type: 'warning', message: 'Meta title is too short (min 30 characters)' });
    } else if (title.length > 60) {
      suggestions.push({ type: 'warning', message: 'Meta title is too long (max 60 characters)' });
    } else {
      suggestions.push({ type: 'success', message: 'Meta title length is optimal' });
    }
  }

  // Description analysis
  if (!description) {
    suggestions.push({ type: 'error', message: 'Meta description is missing' });
  } else {
    if (description.length < 120) {
      suggestions.push({ type: 'warning', message: 'Meta description is too short (min 120 characters)' });
    } else if (description.length > 160) {
      suggestions.push({ type: 'warning', message: 'Meta description is too long (max 160 characters)' });
    } else {
      suggestions.push({ type: 'success', message: 'Meta description length is optimal' });
    }
  }

  // Content analysis
  if (content) {
    // Check keyword density
    const words = content.toLowerCase().split(/\s+/);
    const titleWords = title.toLowerCase().split(/\s+/);
    const keywordDensity = titleWords.reduce((acc, word) => {
      if (word.length > 3) {
        const count = words.filter(w => w === word).length;
        acc[word] = (count / words.length) * 100;
      }
      return acc;
    }, {} as Record<string, number>);

    Object.entries(keywordDensity).forEach(([word, density]) => {
      if (density < 0.5) {
        suggestions.push({ type: 'warning', message: `Keyword "${word}" density is too low (${density.toFixed(1)}%)` });
      } else if (density > 2.5) {
        suggestions.push({ type: 'warning', message: `Keyword "${word}" density is too high (${density.toFixed(1)}%)` });
      }
    });
  }

  return suggestions;
}

interface ReadabilityScore {
  score: number;
  suggestions: string[];
}

export function analyzeReadability(content: string): ReadabilityScore {
  const sentences = content.split(/[.!?]+/);
  const words = content.split(/\s+/);
  const syllables = countSyllables(content);

  // Calculate Flesch Reading Ease score
  const averageWordsPerSentence = words.length / sentences.length;
  const averageSyllablesPerWord = syllables / words.length;
  const fleschScore = 206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllablesPerWord);

  const suggestions: string[] = [];

  if (averageWordsPerSentence > 20) {
    suggestions.push('Try to use shorter sentences (aim for 15-20 words per sentence)');
  }

  if (fleschScore < 60) {
    suggestions.push('The text might be too difficult to read. Consider simplifying your language.');
  }

  // Check paragraph length
  const paragraphs = content.split(/\n\n+/);
  if (paragraphs.some(p => p.split(/\s+/).length > 150)) {
    suggestions.push('Some paragraphs are too long. Consider breaking them up.');
  }

  return {
    score: Math.round(fleschScore),
    suggestions,
  };
}

function countSyllables(text: string): number {
  // Basic syllable counting algorithm
  return text.toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[^aeiouy]+/g, ' ')
    .trim()
    .split(/\s+/).length;
}

export function generateMetaTags(title: string, content: string): string[] {
  const suggestions: string[] = [];
  const keywords = extractKeywords(content);

  suggestions.push(`<title>${title}</title>`);
  suggestions.push(`<meta name="description" content="${generateDescription(content)}">`);
  suggestions.push(`<meta name="keywords" content="${keywords.join(', ')}">`);

  return suggestions;
}

function extractKeywords(content: string): string[] {
  // Simple keyword extraction
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const wordFreq = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(wordFreq)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
}

function generateDescription(content: string): string {
  // Extract first paragraph or first 160 characters
  const firstParagraph = content.split(/\n\n+/)[0];
  return firstParagraph.slice(0, 160).trim() + '...';
} 