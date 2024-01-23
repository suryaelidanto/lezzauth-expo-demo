import * as React from 'react';
import { Text } from 'react-native';
interface Props extends React.ComponentProps<typeof Text> {
    label?: string;
}
export declare function EmailLabel({ label, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
