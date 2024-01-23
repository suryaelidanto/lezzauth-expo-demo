import React from 'react';
import { TouchableOpacity } from 'react-native';
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
    children?: React.ReactNode;
    onSubmit?: () => void;
}
export declare function Button({ children, onSubmit, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
