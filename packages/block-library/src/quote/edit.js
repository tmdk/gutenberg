/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	RichText,
} from '@wordpress/block-editor';
import { BlockQuotation } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

export default function QuoteEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	insertBlocksAfter,
} ) {
	const { align, citation } = attributes;
	const blockProps = useBlockProps( {
		className: classnames( className, {
			[ `has-text-align-${ align }` ]: align,
		} ),
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</BlockControls>
			<BlockQuotation { ...innerBlocksProps }>
				{ innerBlocksProps.children }
				{ ( ! RichText.isEmpty( citation ) ||
					isSelected ) && (
					<RichText
						identifier="citation"
						value={ citation }
						onChange={ ( nextCitation ) =>
							setAttributes( {
								citation: nextCitation,
							} )
						}
						__unstableMobileNoFocusOnMount
						placeholder={
							// translators: placeholder text used for the citation
							__( 'Write citation…' )
						}
						className="wp-block-quote__citation"
						textAlign={ align }
						__unstableOnSplitAtEnd={ () =>
							insertBlocksAfter( createBlock( 'core/paragraph' ) )
						}
					/>
				) }
			</BlockQuotation>
		</>
	);
}
