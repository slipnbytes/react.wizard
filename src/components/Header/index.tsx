import { mergeClassNames } from '@hitechline/reactools';
import { useMemo, useCallback } from 'react';

import { useWizard } from '../../hooks/useWizard';
import type { HeaderProps } from '../../types';
import { Container, Part, Name } from './styles';

export const Header = ({
  custom,
  className,
  ...props
}: HeaderProps): JSX.Element => {
  const { count, current } = useWizard();

  const hasSelected = useCallback(
    (index: number) => index === current,
    [current],
  );

  const hasActive = useCallback(
    (index: number) => index !== current && current > index,
    [current],
  );

  const data = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        index,
        indexSum: index + 1,
        ...custom?.find((_customData, customIndex) => customIndex === index),
      })),
    [count, custom],
  );

  return (
    <Container
      {...props}
      className={mergeClassNames('wizard-header', className)}
    >
      {data.map(({ title, element, index, indexSum }) => (
        <Part
          key={indexSum}
          className={mergeClassNames({
            active: hasActive(index),
            selected: hasSelected(index),
          })}
        >
          <span />

          <section>
            <span>{element ?? indexSum}</span>
          </section>

          <span />

          <Name>{title ?? `Step ${indexSum}`}</Name>
        </Part>
      ))}
    </Container>
  );
};
