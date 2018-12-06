import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import ChipStatus from './ChipStatus';
import { EChipStatus } from '.';

import { convertEnumToKnob } from '../../../../utils/EnumToKnobConversion';

storiesOf('Contentui/Chipstatus', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add(
    'Base',
    withInfo({
      inline: false,
      text: `
			### Description
			Affichage d'un status`
    })(() => {
      const chipStatusKnobs = {
        status: {
          propsName: 'Status',
          defaultValue: EChipStatus.ACTIVE,
          options: convertEnumToKnob(EChipStatus, true)
        }
      };

      return (
        <ChipStatus status={select(
          chipStatusKnobs.status.propsName,
          chipStatusKnobs.status.options,
          chipStatusKnobs.status.defaultValue
        )} placeholder={text('Message', 'Message')}/>
      );
    })
  );