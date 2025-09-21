// Test script to verify Supabase connection
// Run with: node test-supabase.js

const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials in .env.local");
  console.log("Make sure you have:");
  console.log("- NEXT_PUBLIC_SUPABASE_URL");
  console.log("- NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log("🔄 Testing Supabase connection...");

    // Test 1: Check if we can connect
    const { data: topics, error } = await supabase
      .from("topics")
      .select("*")
      .limit(1);

    if (error) {
      console.error("❌ Connection failed:", error.message);
      return;
    }

    console.log("✅ Connection successful!");
    console.log("📊 Found topics:", topics?.length || 0);

    // Test 2: Get all topics
    const { data: allTopics, error: topicsError } = await supabase
      .from("topics")
      .select("*");

    if (topicsError) {
      console.error("❌ Error fetching topics:", topicsError.message);
      return;
    }

    console.log("📋 Topics in database:");
    allTopics?.forEach((topic) => {
      console.log(`  - ${topic.name}: ${topic.description}`);
    });

    // Test 3: Get leaks
    const { data: leaks, error: leaksError } = await supabase
      .from("leaks")
      .select("*");

    if (leaksError) {
      console.error("❌ Error fetching leaks:", leaksError.message);
      return;
    }

    console.log(`🎵 Found ${leaks?.length || 0} leaks in database`);
  } catch (error) {
    console.error("❌ Unexpected error:", error.message);
  }
}

testConnection();
