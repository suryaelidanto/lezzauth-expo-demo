import * as React from 'react';
import { TouchableOpacity } from 'react-native';
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
    children?: React.ReactNode;
}
export declare function GoogleButton({ children, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
