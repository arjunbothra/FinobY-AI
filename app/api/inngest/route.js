import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";
import { checkBudgetAlert} from "../../../lib/inngest/functions";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlert],
});
