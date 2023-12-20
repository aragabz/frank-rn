import {View, ViewProps} from "react-native";
import style from "./style";
import {ReactNode} from "react";

interface RowProps extends ViewProps {
    children: ReactNode;
}

const Row: React.FC<RowProps> = ({children, ...props}) => {
    return <View style={[style.container, props.style]}>{children}</View>;
};

export default Row;
