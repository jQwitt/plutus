// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

import { Component } from "../../types";

interface DashboardProps {
  sidebar: any;
  content: any;
}

export const Dashboard: Component<DashboardProps> = () => (
  <section class="flex flex-row lg:flex-col">
    <div class="bg-red">test</div>
    <div class="bg-green">test</div>
  </section>
);
