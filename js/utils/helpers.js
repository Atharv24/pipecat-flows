//
// Copyright (c) 2024, Daily
//
// SPDX-License-Identifier: BSD 2-Clause License
//

export function formatActions(actions) {
  return actions
    .map((action) => {
      if (action.text) {
        return `${action.type}: "${action.text}"`;
      }
      const { type, ...rest } = action;
      return `${type}: ${JSON.stringify(rest)}`;
    })
    .join('\n');
}
