/**
 * WordPress dependencies
 */
import { MenuGroup, MenuItemsChoice, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function MenuSelector( { onSelectMenu, menus } ) {
	return (
		<div className="edit-navigation-editor">
			<div className="editor-styles-wrapper">
				<MenuGroup>
					<MenuItemsChoice
						onSelect={ onSelectMenu }
						choices={ menus.map( ( menu ) => ( {
							value: menu.id,
							label: menu.name,
						} ) ) }
					/>
				</MenuGroup>

				<Button className="components-button  is-primary">
					{ __( 'Create new menu' ) }
				</Button>
			</div>
		</div>
	);
}
