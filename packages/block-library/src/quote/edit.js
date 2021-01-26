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
import {
	BlockQuotation,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

export default function QuoteEdit( {
	attributes,
	setAttributes,
	className,
	insertBlocksAfter,
	mergedStyle,
} ) {
	const { align, citation, withCitation } = attributes;
	const blockProps = useBlockProps( {
		className: classnames( className, {
			[ `has-text-align-${ align }` ]: align,
		} ),
		style: mergedStyle,
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
				<ToolbarGroup>
					<ToolbarButton
						isActive={ withCitation }
						label={ __( 'Toogle citation visibility' ) }
						onClick={ () => {
							const newAttributes = { withCitation: ! withCitation };
							if ( true === withCitation ) {
								// Reset text if it's transitioning to hidden.
								newAttributes.citation = ''
							}
							setAttributes( newAttributes )
						} }
					>
						{ __( 'Add citation') }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<BlockQuotation { ...innerBlocksProps }>
				{ innerBlocksProps.children }
				{ withCitation && (
					<RichText
						identifier="citation"
						value={ citation }
						onChange={ ( nextCitation ) =>
							setAttributes( {
								citation: nextCitation,
							} )
						}
						__unstableMobileNoFocusOnMount
						aria-label={ __( 'Quote citation text' ) }
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
