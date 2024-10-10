import { FakeIntlProvider } from "@keybr/intl";
import { Distribution } from "@keybr/math";
import { FakeSettingsContext } from "@keybr/settings";
import { render } from "@testing-library/react";
import test from "ava";
import { SpeedHistogram } from "./SpeedHistogram.tsx";

test("render empty", (t) => {
  const r = render(
    <FakeIntlProvider>
      <FakeSettingsContext>
        <SpeedHistogram
          distribution={new Distribution(makeData())}
          thresholds={[]}
          width="100px"
          height="100px"
        />
      </FakeSettingsContext>
    </FakeIntlProvider>,
  );
  t.pass();
  r.unmount();
});

test("render non-empty", (t) => {
  const r = render(
    <FakeIntlProvider>
      <FakeSettingsContext>
        <SpeedHistogram
          distribution={new Distribution(makeData())}
          thresholds={[{ label: "Speed", value: 5 }]}
          width="100px"
          height="100px"
        />
      </FakeSettingsContext>
    </FakeIntlProvider>,
  );
  t.pass();
  r.unmount();
});

function makeData() {
  const data = new Array(1001);
  for (let i = 0; i < data.length; i++) {
    data[i] = i;
  }
  return data;
}