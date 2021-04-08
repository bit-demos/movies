import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { bookFont } from '@teambit/base-ui.theme.fonts.book';
import { headingFontSize, textFontSize } from '@teambit/base-ui.theme.size-definition';
import { baseTheme } from '@teambit/movie-demo.theme.base-theme';

export type ThemeContextProps = { colorDefinition, fonts } & HTMLAttributes<HTMLDivElement>;

export function ThemeContext({ children, className, colorDefinition, fonts, ...rest }: ThemeContextProps) {
  return (
    <div 
      {...rest} 
      className={classNames(
        headingFontSize, 
        textFontSize,
        fonts || bookFont,
        colorDefinition || baseTheme,
        className,
      )}
    >
      {children}
    </div>
  );
}
