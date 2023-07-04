import { Badge, InlineLabel, Input } from '@grafana/ui';
import React, { useState } from 'react';
import { IGNORE_URL } from './../../constants';
import type { InfinityOptions } from './../../types';
import type { DataSourcePluginOptionsEditorProps } from '@grafana/data/types';

export const URLEditor = (props: DataSourcePluginOptionsEditorProps<InfinityOptions>) => {
  const { options, onOptionsChange } = props;
  const [url, setUrl] = useState(options.url || '');
  const onURLChange = () => {
    onOptionsChange({ ...options, url: url || IGNORE_URL });
  };
  return (
    <div className="gf-form">
      <InlineLabel tooltip="Base URL of the query. Leave blank if you want to handle it in the query editor." width={22}>
        Base URL
      </InlineLabel>
      <Input
        width={28}
        placeholder="Leave blank and you can specify full URL in the query."
        value={url === IGNORE_URL ? '' : url}
        onChange={(e) => setUrl(e.currentTarget.value || '')}
        onBlur={onURLChange}
      />
      <div style={{ marginInlineStart: '5px' }}>
        <Badge text="Deprecated field. Use full URL in the query editor instead." color="blue" className="gf-form-label text-info" />
      </div>
    </div>
  );
};
