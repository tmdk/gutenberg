/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { defaultColumnsNumber } from './shared';

export default function save( { attributes } ) {
	const {
		imageCount,
		columns = defaultColumnsNumber( imageCount ),
		imageCrop,
		caption,
	} = attributes;
	const className = `blocks-gallery-grid has-nested-images columns-${ columns } ${
		imageCrop ? 'is-cropped' : ''
	}`;

	return (
		<figure { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content
					tagName="figcaption"
					className="blocks-gallery-caption"
					value={ caption }
				/>
			) }
		</figure>
	);
}
