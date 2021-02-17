/**
 * WordPress dependencies
 */
import { useEffect, useLayoutEffect } from '@wordpress/element';

/**
 * Preferred over direct usage of `useLayoutEffect` when supporting
 * server rendered components (SSR) because currently React
 * throws a warning when using useLayoutEffect in that environment.
 *
 * Copied from untyped @wordpress/compose so that we can continue to
 * maintain all of `ui` typed.
 */
export const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect;
