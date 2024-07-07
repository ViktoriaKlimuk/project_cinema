import { FC } from "react";
import { TypeMaterialIconName } from "shared/interfaces/icons.types";
import * as MaterialIcons from 'react-icons/md';
import { useRenderClient } from "@/hooks/useRenderClient";

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const {isRenderClient} = useRenderClient()

	const IconComponent = MaterialIcons[name]
	if( isRenderClient) {
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	} else return null
}
