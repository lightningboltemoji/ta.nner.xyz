<script lang="ts">
  import ExperienceList from './experience-list.svelte';
</script>

<div>
  <h2>Experience</h2>
  <div class="flex flex-col mt-2">
    {@render companyHeader('Amazon Web Services (AWS)', 'Software Development Engineer II (L5)', '2022 –')}
    <div class="text-xs pt-1">
      <ExperienceList title="High-level responsibilities"></ExperienceList>
      <ExperienceList title="Key deliverables"></ExperienceList>
    </div>
  </div>
  <div class="flex flex-col mt-2">
    {@render companyHeader(
      'HealthSparq (Kyruus Health)',
      'Intern → SDE I → SDE II → SDE III → Architect',
      '2016 – 2022',
    )}
    <div class="text-xs pt-1">
      <ExperienceList title="High-level responsibilities">
        <li>
          Owned immutable, IaC developer platform used by 15+ services teams to deploy 50+ times a day across 150+
          stacks in AWS and GCP
        </li>
        <li>Designed and built APIs, asynchronous processes, and testing tools across all product verticals</li>
      </ExperienceList>
      <ExperienceList title="Key deliverables">
        <li>
          Led cross-team initiative to modernize edge routing and identity infrastructure, reducing static asset latency
          by 40% and API latency by 20%
        </li>
        <li>
          Added support for Google Cloud to developer platform, enabling use of Dataflow and BigQuery, reducing customer
          data intake from days to hours
        </li>
        <li>
          Rebuilt cron-like deployment logic to instantly react to a stack build completing, saving an average of 5
          minutes on 50+ deployments per day
        </li>
        <li>
          Built web-based internal load testing tool on top of Gatling, used by multiple service teams to benchmark
          their service under load (UI + service + workers)
        </li>
        <li>
          Live-migrated external developer API from Apigee to platform-native service, using replay testing to prevent
          regressions
        </li>
      </ExperienceList>
    </div>
  </div>
</div>

{#snippet companyHeader(name: string, title: string, time: string)}
  <div class="flex justify-between items-center">
    <div>
      <h3>{name}</h3>
      <p class="text-xs">{title}</p>
    </div>
    <p>{time}</p>
  </div>
{/snippet}
