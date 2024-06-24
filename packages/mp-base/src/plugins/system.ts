import socketStore from 'mp-base/src/helpers/socket';
import { makeMessage } from 'base/src/message';
import type { SpySystem, PageSpyPlugin } from '@huolala-tech/page-spy-types';
import Client, { combineName } from 'base/src/client';

export default class SystemPlugin implements PageSpyPlugin {
  public name = 'SystemPlugin';

  public static hasInitd = false;

  // eslint-disable-next-line class-methods-use-this
  public onInit() {
    if (SystemPlugin.hasInitd) return;
    SystemPlugin.hasInitd = true;

    socketStore.addListener('refresh', ({ source }, reply) => {
      const { data } = source;
      if (data === 'system') {
        const msg = SystemPlugin.getSystemInfo();
        socketStore.dispatchEvent('public-data', msg);
        reply(msg);
      }
    });
  }

  public onReset() {
    SystemPlugin.hasInitd = false;
  }

  private static getSystemInfo() {
    const deviceInfo = Client.info;
    const msg = makeMessage('system', {
      system: {
        ua: combineName(deviceInfo),
      },
      features: {},
    } as SpySystem.DataItem);

    return msg;
  }
}
