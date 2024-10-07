
// rollup.config.mjs
// import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'lib/esm/index.mjs',
	output: [
		{
			file: 'lib/umd/htmldiff.js',
			format: 'umd',
            name: 'htmldiff',
		},
		{
			file: 'lib/umd/htmldiff.min.js',
			format: 'umd',
			name: 'htmldiff',
			plugins: [terser()]
		}
	],
	// plugins: [json()]
};
