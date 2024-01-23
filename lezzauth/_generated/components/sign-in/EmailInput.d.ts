import * as React from 'react';
import { TextInput } from 'react-native';
interface Props extends React.ComponentProps<typeof TextInput> {
    onChangeText?: ((text: string) => void) | undefined;
    id?: string;
}
export declare function EmailInput({ onChangeText, id, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
