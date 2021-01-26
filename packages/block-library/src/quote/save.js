/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { align, citation, withCitation } = attributes;

	const className = classnames( {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<blockquote { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
			{ withCitation && (
				<RichText.Content tagName="cite" value={ citation } />
			) }
		</blockquote>
	);
}
