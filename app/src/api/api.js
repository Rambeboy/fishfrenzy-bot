import _0x43d106 from 'node-fetch';
import { createProxyAgent } from '../utils/proxy.js';
async function fetchWithProxy(_0x1cc3a6, _0x56d7f1, _0x7c866f) {
  try {
    const _0x466af4 = _0x7c866f ? createProxyAgent(_0x7c866f) : null;
    const _0x24feb2 = {
      ..._0x56d7f1,
      'agent': _0x466af4
    };
    const _0x5b4865 = await _0x43d106(_0x1cc3a6, _0x24feb2);
    if (!_0x5b4865.ok) {
      throw new Error("HTTP Error " + _0x5b4865.status + ": " + _0x5b4865.statusText);
    }
    return await _0x5b4865.json();
  } catch (_0x3dee1a) {
    console.error("Error during fetch " + _0x1cc3a6 + ':', _0x3dee1a.message);
  }
}
export async function getUserInfo(_0x5de4c4, _0x34e48e) {
  try {
    return await fetchWithProxy("https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/users/me", {
      'method': 'GET',
      'headers': {
        'Authorization': "Bearer " + _0x5de4c4
      }
    }, _0x34e48e);
  } catch (_0x5db735) {
    return null;
  }
}
export async function useItem(_0x37d608, _0x3632cf, _0x38fda9) {
  const _0x5bcfc2 = 'https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/items/66b1f692aaa0b594511c2db2/use?userId=' + _0x38fda9;
  try {
    return await fetchWithProxy(_0x5bcfc2, {
      'method': 'GET',
      'headers': {
        'Authorization': "Bearer " + _0x37d608
      }
    }, _0x3632cf);
  } catch (_0x34f2b2) {
    console.error("Error fetching user info:", _0x34f2b2);
    return null;
  }
}
export async function buyFishing(_0x4b6e3c, _0x1b0055, _0x18ea60) {
  const _0x41ea54 = 'https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/items/66b1f692aaa0b594511c2db2/buy?userId=' + _0x18ea60 + "&quantity=1";
  try {
    return await fetchWithProxy(_0x41ea54, {
      'method': "GET",
      'headers': {
        'Authorization': "Bearer " + _0x4b6e3c
      }
    }, _0x1b0055);
  } catch (_0x24c1eb) {
    console.error("Error fetching user info:", _0x24c1eb);
    return null;
  }
}
export async function claimDailyReward(_0x3c53d5, _0x40edad) {
  try {
    return await fetchWithProxy("https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/daily-rewards/claim", {
      'method': "GET",
      'headers': {
        'Authorization': "Bearer " + _0x3c53d5
      }
    }, _0x40edad);
  } catch (_0x41335f) {
    console.error("Error claiming daily reward:", _0x41335f);
    return null;
  }
}
export async function completeTutorial(_0x3a0a65, _0x515271, _0x28e60a) {
  const _0x3b02a7 = "https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/users/" + _0x28e60a + "/complete-tutorial";
  try {
    const _0x3ba324 = await fetchWithProxy(_0x3b02a7, {
      'method': 'POST',
      'headers': {
        'Content-Type': "application/json",
        'origin': 'https://fishingfrenzy.co',
        'Authorization': "Bearer " + _0x3a0a65
      },
      'body': JSON.stringify({})
    }, _0x515271);
    return _0x3ba324;
  } catch (_0xc7ece1) {
    console.error("Error fetching profile:", _0xc7ece1);
    return null;
  }
}
export async function getSocialQuests(_0x58493f, _0x32940a) {
  try {
    return await fetchWithProxy("https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/social-quests/", {
      'method': "GET",
      'headers': {
        'Authorization': "Bearer " + _0x58493f,
        'Content-Type': "application/json"
      }
    }, _0x32940a);
  } catch (_0xf2a010) {
    console.error("Error fetching social quests:", _0xf2a010);
    return [];
  }
}
export async function verifyQuest(_0x39aed1, _0x982aee, _0x4c0fce) {
  const _0x40220d = "https://fishing-frenzy-api-0c12a800fbfe.herokuapp.com/v1/social-quests/" + _0x982aee + '/verify';
  try {
    return await fetchWithProxy(_0x40220d, {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json",
        'origin': 'https://fishingfrenzy.co',
        'Authorization': "Bearer " + _0x39aed1
      },
      'body': JSON.stringify({})
    }, _0x4c0fce);
  } catch (_0x2111aa) {
    console.error("Error verifying quest:", _0x2111aa);
    return null;
  }
}
