/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardData, Groups } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type CardeditProps = React.PropsWithChildren<Partial<ViewProps> & {
    Card?: CardData;
    groups?: Groups;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Cardedit(props: CardeditProps): React.ReactElement;
