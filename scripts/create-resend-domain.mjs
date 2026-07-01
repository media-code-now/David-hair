#!/usr/bin/env node
/**
 * One-time setup script: registers hairtoppersisrael.com with Resend and prints
 * the DNS records you need to add at your domain registrar/DNS provider to
 * verify it for sending (SPF, DKIM, and optionally tracking).
 *
 * Usage:
 *   1. Put your real Resend API key in .env.local -> RESEND_API_KEY=re_xxxxxxxxx
 *   2. Run:  npm run resend:add-domain
 *   3. Copy the printed DNS records into your DNS provider (e.g. GoDaddy,
 *      Cloudflare, Namecheap, wherever hairtoppersisrael.com is managed).
 *   4. Wait for DNS to propagate, then verify the domain at
 *      https://resend.com/domains (or re-run this script — Resend will tell
 *      you if the domain already exists).
 *   5. Once verified, update RESEND_FROM_EMAIL in .env.local to send from
 *      your own domain instead of onboarding@resend.dev, e.g.:
 *      RESEND_FROM_EMAIL="David Hair Solutions <leads@hairtoppersisrael.com>"
 */

import { Resend } from 'resend';

const DOMAIN_NAME = 'hairtoppersisrael.com';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey || apiKey.trim().length === 0) {
  console.error('\n❌ RESEND_API_KEY is not set.\n');
  console.error('   1. Get a key at https://resend.com/api-keys');
  console.error('   2. Add it to .env.local:  RESEND_API_KEY=re_xxxxxxxxx');
  console.error('   3. Re-run:  npm run resend:add-domain\n');
  process.exit(1);
}

const resend = new Resend(apiKey);

function printRecordsTable(records) {
  const columns = ['record', 'type', 'name', 'value', 'priority', 'ttl', 'status'];
  const widths = columns.map((col) =>
    Math.max(col.length, ...records.map((r) => String(r[col] ?? '').length))
  );

  const printRow = (values) => {
    console.log(values.map((v, i) => String(v ?? '').padEnd(widths[i])).join('  |  '));
  };

  printRow(columns.map((c) => c.toUpperCase()));
  printRow(widths.map((w) => '-'.repeat(w)));
  for (const record of records) {
    printRow(columns.map((c) => record[c]));
  }
}

async function main() {
  console.log(`\n📡 Creating/registering domain "${DOMAIN_NAME}" with Resend...\n`);

  const { data, error } = await resend.domains.create({ name: DOMAIN_NAME });

  let domain = data;

  if (error) {
    const isAlreadyRegistered = String(error.message || '').toLowerCase().includes('already');

    if (!isAlreadyRegistered) {
      console.error('❌ Resend API error:', error.message || error);
      process.exit(1);
    }

    console.log(`ℹ️  "${DOMAIN_NAME}" is already registered in this Resend account.`);
    console.log('   Looking up its existing details instead...\n');

    const { data: list, error: listError } = await resend.domains.list();

    if (listError) {
      console.error('❌ Failed to list domains:', listError.message || listError);
      process.exit(1);
    }

    const existing = list?.data?.find((d) => d.name === DOMAIN_NAME);

    if (!existing) {
      console.error(`❌ Could not find "${DOMAIN_NAME}" in the domains list.`);
      console.error('   Check https://resend.com/domains manually.\n');
      process.exit(1);
    }

    const { data: fullDomain, error: getError } = await resend.domains.get(existing.id);

    if (getError || !fullDomain) {
      console.error('❌ Failed to fetch domain details:', getError?.message || getError);
      process.exit(1);
    }

    domain = fullDomain;
  }

  console.log(`✅ Domain: ${domain.name}  (status: ${domain.status})\n`);
  console.log(`   Domain ID: ${domain.id}`);
  console.log(`   Region:    ${domain.region}\n`);

  if (domain.status === 'verified') {
    console.log('🎉 This domain is already verified! You can send from it right now.\n');
    console.log('   Update RESEND_FROM_EMAIL in .env.local, e.g.:');
    console.log('   RESEND_FROM_EMAIL="David Hair Solutions <leads@hairtoppersisrael.com>"\n');
    return;
  }

  console.log('📋 Add these DNS records at your domain registrar / DNS provider:\n');
  printRecordsTable(domain.records);

  console.log('\n➡️  Next steps:');
  console.log('   1. Add the records above as DNS entries for hairtoppersisrael.com.');
  console.log('   2. Wait a few minutes to a few hours for DNS propagation.');
  console.log('   3. Verify the domain at https://resend.com/domains');
  console.log('   4. Update RESEND_FROM_EMAIL in .env.local to use your own domain, e.g.:');
  console.log('      RESEND_FROM_EMAIL="David Hair Solutions <leads@hairtoppersisrael.com>"\n');
}

main().catch((err) => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
