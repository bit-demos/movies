import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { bookFont } from '@teambit/base-ui.theme.fonts.book';
import { headingFontSize, textFontSize } from '@teambit/base-ui.theme.size-definition';
import { primaryPalette } from '@teambit/base-ui.theme.color-definition';
import { brands as bitBrands } from '@teambit/base-ui.theme.brand-definition';
import { headingMargins } from '@teambit/base-ui.theme.heading-margin-definition';

export type ThemeContextProps = { palette?, fonts?, brands? } & HTMLAttributes<HTMLDivElement>;

export function ThemeContext({ 
  children, 
  className, 
  brands = bitBrands, 
  palette = primaryPalette, 
  fonts = bookFont, 
  ...rest 
}: ThemeContextProps) {
  return (
    <div 
      {...rest} 
      className={classNames(
        headingFontSize, 
        headingMargins,
        textFontSize,
        fonts,
        palette,
        className,
      )}
    >
      {children}
    </div>
  );
}
