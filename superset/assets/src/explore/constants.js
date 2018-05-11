export const AGGREGATES = {
  AVG: 'AVG',
  COUNT: 'COUNT ',
  COUNT_DISTINCT: 'COUNT_DISTINCT',
  MAX: 'MAX',
  MIN: 'MIN',
  SUM: 'SUM',
};

export const OPERATORS = {
  '==': '==',
  '!=': '!=',
  '>': '>',
  '<': '<',
  '>=': '>=',
  '<=': '<=',
  in: 'in',
  'not in': 'not in',
  like: 'like',
  regex: 'regex',
};

export const TABLE_ONLY_OPERATORS = [OPERATORS.like];
export const DRUID_ONLY_OPERATORS = [OPERATORS.regex];
export const HAVING_OPERATORS = [
  OPERATORS['=='],
  OPERATORS['!='],
  OPERATORS['>'],
  OPERATORS['<'],
  OPERATORS['>='],
  OPERATORS['<='],
];
export const MULTI_OPERATORS = [OPERATORS.in, OPERATORS['not in']];

export const sqlaAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
export const druidAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
