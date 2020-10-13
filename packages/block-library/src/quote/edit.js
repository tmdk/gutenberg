/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';
import { BlockQuotation } from '@wordpress/components';

<<<<<<< HEAD
export default function QuoteEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	insertBlocksAfter,
	mergedStyle,
	clientId,
} ) {
	const { align, citation } = attributes;
=======
export default function QuoteEdit( { attributes, setAttributes, className } ) {
	const { align } = attributes;
>>>>>>> cfc9185a6f... Make edit markup look like save (use lightblockwrapper for inner blocks)
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
			</BlockControls>
			<BlockQuotation { ...innerBlocksProps } />
		</>
	);
}
