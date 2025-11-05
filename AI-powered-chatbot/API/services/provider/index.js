// adapter returns an object { stream(chatContext, onChunk) }
import MockProvider from './mockProvider.js';


const providers = { mock: new MockProvider() };
export default providers;