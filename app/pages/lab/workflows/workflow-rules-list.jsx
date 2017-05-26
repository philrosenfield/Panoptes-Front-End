/* eslint-disable no-confusing-arrow, multiline-ternary */

import React from 'react';
import WorkflowRuleContainer from './workflow-rule-container';

const WorkflowRuleList = ({ rules }) =>
  <div>
    <h3>Retirement Rules</h3>
    {(rules && rules.length) ?
      <div>
        {rules.map((rule, idx) => <WorkflowRuleContainer rule={rule} key={idx} />)}
      </div>
    : <span>no rules</span>}
  </div>;

WorkflowRuleList.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({ foo: React.PropTypes.string })).isRequired
};

export default WorkflowRuleList;
