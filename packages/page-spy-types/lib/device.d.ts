// all use lower case for convenience in comparing.
export type OS =
  | 'windows'
  | 'ios'
  | 'ipad'
  | 'mac'
  | 'android'
  | 'linux'
  | 'harmony'
  | 'unknown';

export type MPType =
  | 'mp-wechat'
  | 'mp-qq'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-toutiao'
  | 'mp-douyin'
  | 'mp-lark'
  | 'mp-kuaishou'
  | 'mp-jd'
  | 'mp-toutiao-lt'
  | 'mp-douyin-lt'
  | 'mp-douyin-huoshan'
  | 'mp-xigua'
  | 'mp-ppx' // 皮皮虾
  | 'mp-dingtalk'
  | 'mp-xhs'
  | 'mp-uni'; // uni app 推出的小程序集成方案，类似 mpaas;

// all use lower case for convenience in comparing.
export type Browser =
  | 'wechat'
  | 'qq'
  | 'uc'
  | 'baidu'
  | 'edge'
  | 'chrome'
  | 'firefox'
  | 'safari'
  | 'unknown'
  | MPType
  | 'uni-native';

export type Framework = 'uniapp' | 'taro' | 'unknown';

export interface DeviceInfo {
  osType: OS;
  osVersion: string;
  browserType: Browser;
  browserVersion: string;
  framework?: Framework; // Currently only for miniprogram
  isDevTools?: boolean;
}
