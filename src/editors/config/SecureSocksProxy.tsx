import React from 'react';
import { InlineLabel, InlineSwitch } from '@grafana/ui';
import type { DataSourcePluginOptionsEditorProps } from '@grafana/data/types';
import type { InfinityOptions } from '../../types';

export const SecureSocksProxyEditor = (props: DataSourcePluginOptionsEditorProps<InfinityOptions>) => {
  const { options, onOptionsChange } = props;
  const { jsonData = {} } = options;
  return (
    <>
      <div className="gf-form">
        <InlineLabel
          width={22}
          tooltip={
            <>
              Enable proxying the datasource connection through the secure socks proxy to a different network. See{' '}
              <a href="https://grafana.com/docs/grafana/next/setup-grafana/configure-grafana/proxy/" target="_blank" rel="noopener noreferrer">
                Configure a datasource connection proxy.
              </a>
            </>
          }
        >
          Secure Socks Proxy
        </InlineLabel>
        <InlineSwitch value={jsonData.enableSecureSocksProxy || false} onChange={(e) => onOptionsChange({ ...options, jsonData: { ...jsonData, enableSecureSocksProxy: e.currentTarget.checked } })} />
      </div>
    </>
  );
};
