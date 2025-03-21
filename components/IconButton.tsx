import type { MouseEventHandler } from 'react';

import { Icon, IconButton as MuiIconButton, Tooltip } from '@mui/material';

interface Props {
  ariaLabel: string;
  icon: React.ElementType;
  iconSize?: 'small' | 'medium' | 'large';
  onClick: MouseEventHandler<HTMLButtonElement>;
  tooltipText?: string;
  edge?: 'start' | 'end';
}

export function IconButton({
  icon,
  iconSize = 'medium',
  onClick,
  ariaLabel,
  tooltipText,
  edge,
}: Props) {
  return (
    <Tooltip title={tooltipText}>
      <MuiIconButton
        onClick={onClick}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={ariaLabel}
        size="large"
        sx={{ height: '3.2rem', width: '3.2rem' }}
        edge={edge}
      >
        <Icon component={icon} fontSize={iconSize} />
      </MuiIconButton>
    </Tooltip>
  );
}
