import React from 'react';
import classNames from 'classnames';

import './style.scss';

type LabeledSwitchProps = {
  value: boolean;
  leftOption: string;
  rightOption: string;
  onToggle: (value: boolean) => void;
  className?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
};

export default function LabeledSwitch({
  value,
  leftOption,
  rightOption,
  onToggle,
  className,
  width,
  height,
  fontSize,
  disabled,
}: LabeledSwitchProps) {
  const handleToggle = (toggleValue: boolean) => {
    if (!disabled) {
      if (value === toggleValue) return;

      onToggle(toggleValue);
    }
  };

  const transformX = value ? (width || 0) / 2 - 2 : 2;

  return (
    <div
      className={classNames('LabeledSwitch', className, {
        LabeledSwitchActive: value,
        LabeledSwitchDisabled: disabled,
      })}
      style={{ width: `${width}px`, minHeight: `${height}px` }}
    >
      <div className="LabeledSwitch__inner">
        <div
          className="LabeledSwitch__pointer"
          style={{ transform: `translateX(${transformX}px)` }}
        >
          <span
            className={classNames('LabeledSwitch__pointer__background', {
              LabeledSwitch__pointer__background__start: transformX === 2,
              LabeledSwitch__pointer__background__finish: transformX !== 2,
            })}
          />
        </div>

        <button
          className={classNames({
            LabeledSwitch__buttonActive: !value,
          })}
          onClick={() => handleToggle(false)}
          type="button"
          style={{
            minHeight: `${(height || 0) - 2}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <p>
            <span>{leftOption}</span>
          </p>
        </button>
        <button
          className={classNames({
            LabeledSwitch__buttonActive: value,
          })}
          onClick={() => handleToggle(true)}
          type="button"
          style={{
            minHeight: `${(height || 0) - 2}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <p>
            <span>{rightOption}</span>
          </p>
        </button>
      </div>
    </div>
  );
}
