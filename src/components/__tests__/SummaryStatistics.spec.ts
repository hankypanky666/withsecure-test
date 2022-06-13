import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import SummaryStatistics from "../SummaryStatistics.vue";
import { createPinia, setActivePinia } from "pinia";

describe("SummaryStatistics", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should renders properly", () => {
    const wrapper = mount(SummaryStatistics);

    expect(wrapper.find(".summary-body")).toBeDefined();
  });
});
