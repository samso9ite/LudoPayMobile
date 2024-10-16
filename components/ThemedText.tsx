import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  color?:string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  color,
  type = 'default',
  ...rest
}: ThemedTextProps) {

  return (
    <Text
      style={[
        { color: color},
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'subtitleRubik' ? styles.subtitleRubik : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily:"RubikRegular",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily:"RubikSemiBold",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: "BaseNuewBold"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"BaseNuewSemiBold"
  },
  subtitleRubik: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"RubikSemiBold"
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    fontFamily:"RubikRegular"
  },
});
