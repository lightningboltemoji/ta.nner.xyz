<script lang="ts">
  import ExperienceList from './experience-list.svelte';
  import Redacted from './redacted.svelte';
</script>

<div>
  <h2>Experience</h2>
  <div class="flex flex-col mt-2">
    {@render companyHeader('Amazon Web Services (AWS), EC2 Pricing', 'Software Development Engineer II (L5)', '2022 –')}
    <div class="text-xs pt-1">
      <div class="font-bold">High-level description</div>
      <div>
        <Redacted
          ciphertext="mZAHx+70FcaFoRNljHsSG1yFlJGGOtseEMOBf01WLEzvJVG3sKF3sf02SQzzGuZh8kUCwiyhYOpKe4T/tBzsmLBdRWaMW6fwZpCksbBbWBDC4a6QNeb3aAkg+cj+wJwwlcVDe8XqoF9enHRohp+ROTG83rTzNy5Xi5xu5Irh+C6Q1FZJ5igOpgKajIKBq0jRtJK+87LK4ob+8Lh6WHdkohLYIVFImH7rPWigiCOaFx2BHJgZt+w6omubogXi1NXJYgBGXoYctbfOnfhb6+1zNZ0dCbP7gfFgp332WWYryEaeIKetTgNN0sL8MNHzwvCcqGY="
          salt="8ZRyVOmPyi3DHVzW9DugMg=="
          iv="8k8KFw5zf0QJwMlg"
          placeholderLength={233}
        />
      </div>
      <ExperienceList title="Key deliverables">
        <li>
          <Redacted
            ciphertext="Q2pWPfH/aAdKl6YfYFVwAHKXwu/IFxAG6ve1W5N3a4wTX6o2Jro7fxBg1yPCvo2BDkye++eq7S6Z+m7fgxwN23Ea7DvROdTBFTC5ALLE+jyf3HdK52I8QULNYKak2TXzHpR44aupgRRtO618B1InjbCJXzbDQXtQntI="
            salt="skmVx7sauAXHSp+EwYqpEw=="
            iv="QtZkqAVJ2XVytJIz"
            placeholderLength={107}
          />
        </li>
        <li>
          <Redacted
            ciphertext="wqP0b0VKImsFdN+a6u089XKizVHLO73GHE8mZBN7ZH0B8ft1jGvXFxml0zcIVOF1HTHoylo+CIzMT5hgJS1UIr3tC+lRxfsx4wAn8G72IMvQ0mXFj6ozdgmbWQsvIkc0bjrlRGAydu4xo3tS4OnOpNlBBliO6A8UowE="
            salt="CdRvPg2fy7z7I+8/xk+YZQ=="
            iv="DJsnPjXe/zIgaFwq"
            placeholderLength={107}
          />
        </li>
        <li>
          <Redacted
            ciphertext="TLqK5HbTuM/8p6L4qKaR9ixUIwSUWXlrJLQljiNc1UEysSyBOL1rlzvdvTPK9Xp5l/WDRnM2qjv9CBm1FnxTWWie/YKkTgdw"
            salt="uvtVL+ZC8Im5NbZ/x5kmdw=="
            iv="D1YmEc7a8MbSdQZt"
            placeholderLength={58}
          />
        </li>
      </ExperienceList>
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
