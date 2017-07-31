import React from 'react';

const OrganizationMetadataStat = ({ value, label }) => (
  <div className="organization-metadata-stat">
    <div className="organization-metadata-stat__value">{value > 0 ? { value } : 0}</div>
    <div className="organization-metadata-stat__label">{label}</div>
  </div>
);

OrganizationMetadataStat.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
};

export default class OrganizationMetadata extends React.Component {
  constructor(props) {
    super(props);

    this.extractStat = this.extractStat.bind(this);
  }

  extractStat(statName) {
    const projects = this.props.organization.projects;
    return projects.reduce((accum, project) => accum + project[statName], 0);
  }

  render() {
    const organization = this.props.organization;

    return (
      <div className="organization-metadata">
        <div className="organization-metadata__title">{organization.display_name}{' '}Statistics</div>
        <div className="organization-metadata-stats">
          <OrganizationMetadataStat
            label="Volunteers"
            value={this.extractStat('classifiers_count').toLocaleString()}
          />
          <OrganizationMetadataStat
            label="Classifications"
            value={this.extractStat('classifications_count').toLocaleString()}
          />
          <OrganizationMetadataStat
            label="Subjects"
            value={this.extractStat('subjects_count').toLocaleString()}
          />
        </div>
      </div>
    );
  }

}

OrganizationMetadata.propTypes = {
  organization: React.PropTypes.shape({
    projects: React.PropTypes.arrayOf(React.PropTypes.object)
  }).isRequired
};
