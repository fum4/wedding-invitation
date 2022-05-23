const basename = process.env.PUBLIC_URL || '';

export const staticImageUrl = (imgName) => `${basename}/assets/${imgName}`;
