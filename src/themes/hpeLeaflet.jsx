import React from 'react';
import {
  StatusCriticalSmall,
  StatusGoodSmall,
  StatusWarningSmall,
  StatusUnknownSmall,
} from 'grommet-icons';

import { hpe } from 'grommet-theme-hpe';

const markerKinds = {
  default: {
    container: {
      border: {
        color: 'border-strong',
        size: 'small',
      },
    },
  },
  critical: {
    container: {
      // any box props
      background: 'background-front',
      border: { color: 'status-critical', size: '3px' },
    },
    icon: <StatusCriticalSmall color="status-critical" size="13px" />,
  },
  warning: {
    container: {
      background: 'background-front',
      border: { color: 'status-warning' },
    },
    icon: <StatusWarningSmall color="status-warning" size="13px" />,
  },
  good: {
    container: {
      background: 'background-front',
      border: { color: 'status-ok' },
    },
    icon: <StatusGoodSmall color="status-ok" size="13px" />,
  },
  unknown: {
    container: {
      background: 'background-front',
      border: { color: 'status-unknown' },
    },
    icon: <StatusUnknownSmall color="status-unknown" size="13px" />,
  },
};

const hpeLeaflet = {
  pin: { ...markerKinds },
  cluster: { ...markerKinds },
};

export { hpeLeaflet };
