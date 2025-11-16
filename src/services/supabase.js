import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eujcevtecbwliwyvydqn.supabase.co";
const supabaseKey = "sb_publishable_ymLCyeuFkpMSulW5CWWxeA_S-inr9re";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
