/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import AutoAddPagesPanel from './auto-add-pages-panel';
import DeleteMenuPanel from './delete-menu-panel';

export default function InspectorAdditions( {
	menuId,
	onDeleteMenu,
	isMenuBeingDeleted,
} ) {
	const selectedBlock = useSelect(
		( select ) => select( 'core/block-editor' ).getSelectedBlock(),
		[]
	);

	if ( selectedBlock?.name !== 'core/navigation' ) {
		return null;
	}

	return (
		<div>
			<AutoAddPagesPanel menuId={ menuId } />
			<DeleteMenuPanel
				onDeleteMenu={ onDeleteMenu }
				isMenuBeingDeleted={ isMenuBeingDeleted }
			/>
		</div>
	);
}
