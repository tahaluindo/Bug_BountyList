const data = [
  {
    "name": "American Battle Monuments Commission",
    "url": "https://bugcrowd.com/abmc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://abmc.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Acorns Grow, Inc.",
    "url": "https://bugcrowd.com/acorns",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 3500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*.acorns.com"
        },
        {
          "type": "other",
          "target": "Acorns for Android"
        },
        {
          "type": "other",
          "target": "Acorns for iOS"
        },
        {
          "type": "other",
          "target": "https://app.acorns.com"
        },
        {
          "type": "other",
          "target": "https://client.acorns.com"
        },
        {
          "type": "api",
          "target": "https://graphql.acorns.com"
        },
        {
          "type": "website",
          "target": "https://help.acorns.com"
        },
        {
          "type": "website",
          "target": "https://signup.acorns.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "1Password",
    "url": "https://bugcrowd.com/agilebits",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 30000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "<Account (Business, Family) signup page --> https://start.1password.com"
        },
        {
          "type": "other",
          "target": "<White Box Test team --> https://bugcrowd-test.1password.com"
        },
        {
          "type": "other",
          "target": "<Your own 1Password subdomain --> https://<your account domain>.1password.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.agilebits.com"
        }
      ]
    }
  },
  {
    "name": "Akeyless",
    "url": "https://bugcrowd.com/akeyless-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 7000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "http://api.akeyless.io/ - API"
        },
        {
          "type": "website",
          "target": "https://console.akeyless.io/ - Akeyless Application"
        },
        {
          "type": "website",
          "target": "https://www.akeyless.io/ - Marketing pages"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "AMEX - Global Business Travel Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/amexgbt-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.amexgbt.com"
        },
        {
          "type": "website",
          "target": "*.amexglobalbusinesstravel.com"
        },
        {
          "type": "website",
          "target": "*.banks-sadler.com"
        },
        {
          "type": "website",
          "target": "*.gbtad.com"
        },
        {
          "type": "website",
          "target": "*.gbtexternal.com"
        },
        {
          "type": "website",
          "target": "*.gbtspain.com"
        },
        {
          "type": "website",
          "target": "*.hrgnorthamerica.com"
        },
        {
          "type": "website",
          "target": "*.hrgworldwide.com"
        },
        {
          "type": "website",
          "target": "*.kds.com"
        },
        {
          "type": "website",
          "target": "*.lawyerstravel.com"
        },
        {
          "type": "website",
          "target": "*.meetingsexpreess.com"
        },
        {
          "type": "website",
          "target": "*.meetingsexpress.com"
        },
        {
          "type": "website",
          "target": "*.meetingssource.com"
        },
        {
          "type": "website",
          "target": "*.miclientool.com/"
        },
        {
          "type": "website",
          "target": "*.mieventool.com"
        },
        {
          "type": "website",
          "target": "*.miwebtool.com"
        },
        {
          "type": "website",
          "target": "*.mykds.com"
        },
        {
          "type": "website",
          "target": "*.ovationtravel.com"
        },
        {
          "type": "website",
          "target": "*.sourcingcenteramexgbt.com"
        },
        {
          "type": "website",
          "target": "*.supplierstool.com"
        },
        {
          "type": "website",
          "target": "*.uathrg-isuite.com"
        },
        {
          "type": "website",
          "target": "*.uathrgisuite.com"
        },
        {
          "type": "website",
          "target": "*GBTNTA.com"
        },
        {
          "type": "other",
          "target": "203.125.28.128/28"
        },
        {
          "type": "website",
          "target": "gbt-invoicing.com"
        },
        {
          "type": "website",
          "target": "https://*.neo1.com/"
        },
        {
          "type": "website",
          "target": "https://pat.itq.in/"
        },
        {
          "type": "website",
          "target": "https://www.ebrdevents.co.uk/"
        },
        {
          "type": "website",
          "target": "www.bienquiries.co.uk"
        },
        {
          "type": "website",
          "target": "www.mytravelsolution.com"
        },
        {
          "type": "website",
          "target": "www.winnerscircleregistration.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "ctx.amexgbt.com"
        },
        {
          "type": "website",
          "target": "https://register.banks-sadler.com"
        },
        {
          "type": "website",
          "target": "prod1.amexgbt.com"
        },
        {
          "type": "website",
          "target": "sql.amexgbt.com"
        },
        {
          "type": "website",
          "target": "sslvpn.amexgbt.com"
        },
        {
          "type": "website",
          "target": "stage.amexgbt.com"
        },
        {
          "type": "website",
          "target": "staging.amexgbt.com"
        },
        {
          "type": "website",
          "target": "test1.amexgbt.com"
        },
        {
          "type": "website",
          "target": "testuat.amexgbt.com"
        },
        {
          "type": "website",
          "target": "voip.amexgbt.com"
        },
        {
          "type": "website",
          "target": "wordpress.amexgbt.com"
        }
      ]
    }
  },
  {
    "name": "ANZ Responsible Disclosure Program",
    "url": "https://bugcrowd.com/anz-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "ANZ Australia Android App"
        },
        {
          "type": "ios",
          "target": "ANZ Australia iOS App"
        },
        {
          "type": "android",
          "target": "ANZ Plus Android App"
        },
        {
          "type": "ios",
          "target": "ANZ Plus iOS App"
        },
        {
          "type": "website",
          "target": "anz.com"
        },
        {
          "type": "website",
          "target": "anz.com.au"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Arlo Cash Rewards",
    "url": "https://bugcrowd.com/arlo",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "iot",
          "target": "Arlo"
        },
        {
          "type": "android",
          "target": "Arlo Android App"
        },
        {
          "type": "iot",
          "target": "Arlo Baby"
        },
        {
          "type": "iot",
          "target": "Arlo Base Station"
        },
        {
          "type": "iot",
          "target": "Arlo Bridge"
        },
        {
          "type": "iot",
          "target": "Arlo Essential"
        },
        {
          "type": "iot",
          "target": "Arlo Floodlight"
        },
        {
          "type": "iot",
          "target": "Arlo Go"
        },
        {
          "type": "iot",
          "target": "Arlo Pro"
        },
        {
          "type": "iot",
          "target": "Arlo Pro 2"
        },
        {
          "type": "iot",
          "target": "Arlo Pro 3"
        },
        {
          "type": "iot",
          "target": "Arlo Pro 4"
        },
        {
          "type": "iot",
          "target": "Arlo Q"
        },
        {
          "type": "iot",
          "target": "Arlo Q+"
        },
        {
          "type": "iot",
          "target": "Arlo Security Light"
        },
        {
          "type": "iot",
          "target": "Arlo Ultra"
        },
        {
          "type": "iot",
          "target": "Arlo Video Doorbell"
        },
        {
          "type": "iot",
          "target": "Arlo Wireless Video Doorbell"
        },
        {
          "type": "ios",
          "target": "Arlo iOS App"
        },
        {
          "type": "api",
          "target": "https://arlo-device.messaging.netgear.com"
        },
        {
          "type": "website",
          "target": "https://community.arlo.com"
        },
        {
          "type": "api",
          "target": "https://mcs.arlo.com"
        },
        {
          "type": "website",
          "target": "https://my.arlo.com"
        },
        {
          "type": "api",
          "target": "https://myapi.arlo.com"
        },
        {
          "type": "website",
          "target": "https://shop.arlo.com"
        },
        {
          "type": "website",
          "target": "https://ukshop.arlo.com/"
        },
        {
          "type": "api",
          "target": "https://updates.arlo.com"
        },
        {
          "type": "api",
          "target": "https://updates.netgear.com/arlo"
        },
        {
          "type": "website",
          "target": "https://www.arlo.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Arlo Kudos Rewards",
    "url": "https://bugcrowd.com/arlokudos",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [

      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Arrow Electronics VDP",
    "url": "https://bugcrowd.com/arrow-electronics-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.Datasheet"
        },
        {
          "type": "website",
          "target": "*.aepetsche.com"
        },
        {
          "type": "website",
          "target": "*.arrow.cn"
        },
        {
          "type": "website",
          "target": "*.arrow.com"
        },
        {
          "type": "website",
          "target": "*.aspencore.com"
        },
        {
          "type": "website",
          "target": "*.chip1stop.com"
        },
        {
          "type": "website",
          "target": "*.eetimes.com"
        },
        {
          "type": "website",
          "target": "*.einfochips.com"
        },
        {
          "type": "website",
          "target": "*.elektroda.pl"
        },
        {
          "type": "website",
          "target": "*.immixgroup.com"
        },
        {
          "type": "website",
          "target": "*.powerandsignal.com"
        },
        {
          "type": "website",
          "target": "*.richardsonrfpd.com"
        },
        {
          "type": "website",
          "target": "*.siliconexpert.com"
        },
        {
          "type": "website",
          "target": "*.transim.com"
        },
        {
          "type": "website",
          "target": "*.verical.com"
        },
        {
          "type": "website",
          "target": "*.xsp.arrow.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Aruba Networks Public Program",
    "url": "https://bugcrowd.com/aruba-public",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.arubanetworks.com"
        },
        {
          "type": "other",
          "target": "Aruba AirWave AMP"
        },
        {
          "type": "other",
          "target": "Aruba ClearPass Policy Manager"
        },
        {
          "type": "iot",
          "target": "Aruba EdgeConnect Enterprise"
        },
        {
          "type": "other",
          "target": "Aruba EdgeConnect Enterprise Orchestrator"
        },
        {
          "type": "other",
          "target": "Aruba InstantOn"
        },
        {
          "type": "hardware",
          "target": "Aruba User Experience Insight Sensors"
        },
        {
          "type": "other",
          "target": "Aruba Wireless – ArubaOS and Aruba Instant"
        },
        {
          "type": "other",
          "target": "ArubaOS-CX Wired Switches"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.atl.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "*.getaws.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "*.iot.developer.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "*.isb.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "asp-notifications.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "community.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "enews.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "http://outdoorplanner.arubanetworks.com/"
        },
        {
          "type": "website",
          "target": "innovate.arubanetworks.com"
        },
        {
          "type": "website",
          "target": "quickconnect.arubanetworks.com"
        }
      ]
    }
  },
  {
    "name": "Asana",
    "url": "https://bugcrowd.com/asana",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 6500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.app.asana.com"
        },
        {
          "type": "website",
          "target": "*.asana.biz"
        },
        {
          "type": "website",
          "target": "*.asana.plus"
        },
        {
          "type": "android",
          "target": "Asana Android app"
        },
        {
          "type": "other",
          "target": "Asana Desktop App"
        },
        {
          "type": "ios",
          "target": "Asana iOS app"
        },
        {
          "type": "website",
          "target": "app.asana.com"
        },
        {
          "type": "website",
          "target": "asana.com"
        },
        {
          "type": "website",
          "target": "form.asana.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Other subdomains of asana.com"
        },
        {
          "type": "other",
          "target": "Social engineering against Asana Support"
        }
      ]
    }
  },
  {
    "name": "Atlassian",
    "url": "https://bugcrowd.com/atlassian",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.atlastunnel.com"
        },
        {
          "type": "other",
          "target": "Any associated *.atlassian.com or *.atl-paas.net domain that can be exploited DIRECTLY from the *.atlassian.net instance"
        },
        {
          "type": "website",
          "target": "Any other *.atlassian.com or *.atl-paas.net domain that cannot be exploited directly from a *.atlassian.net instance"
        },
        {
          "type": "website",
          "target": "Atlassian Access (https://admin.atlassian.com/atlassian-access)"
        },
        {
          "type": "website",
          "target": "Atlassian Admin (https://admin.atlassian.com/)"
        },
        {
          "type": "website",
          "target": "Atlassian Compass"
        },
        {
          "type": "website",
          "target": "Atlassian Identity (https://id.atlassian.com/login)"
        },
        {
          "type": "website",
          "target": "Atlassian Marketplace (https://marketplace.atlassian.com)"
        },
        {
          "type": "website",
          "target": "Atlassian Start (https://start.atlassian.com)"
        },
        {
          "type": "website",
          "target": "Atlassian Team Central"
        },
        {
          "type": "other",
          "target": "Bamboo"
        },
        {
          "type": "website",
          "target": "Bitbucket Cloud including Bitbucket Pipelines (https://bitbucket.org)"
        },
        {
          "type": "other",
          "target": "Bitbucket Server"
        },
        {
          "type": "website",
          "target": "Confluence Cloud (bugbounty-test-<bugcrowd-name>.atlassian.net/wiki)"
        },
        {
          "type": "android",
          "target": "Confluence Cloud Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "Confluence Cloud Mobile App for iOS"
        },
        {
          "type": "website",
          "target": "Confluence Cloud Premium (bugbounty-test-<bugcrowd-name>.atlassian.net/wiki)"
        },
        {
          "type": "other",
          "target": "Confluence Companion App for macOS and Windows"
        },
        {
          "type": "other",
          "target": "Confluence Server"
        },
        {
          "type": "android",
          "target": "Confluence Server Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "Confluence Server Mobile App for iOS"
        },
        {
          "type": "other",
          "target": "Crowd"
        },
        {
          "type": "other",
          "target": "Crucible"
        },
        {
          "type": "other",
          "target": "FishEye"
        },
        {
          "type": "android",
          "target": "Jira Cloud Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "Jira Cloud Mobile App for iOS"
        },
        {
          "type": "other",
          "target": "Jira Core Server"
        },
        {
          "type": "website",
          "target": "Jira Product Discovery"
        },
        {
          "type": "android",
          "target": "Jira Server Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "Jira Server Mobile App for iOS"
        },
        {
          "type": "website",
          "target": "Jira Service Management Cloud (bugbounty-test-<bugcrowd-name>.atlassian.net)"
        },
        {
          "type": "other",
          "target": "Jira Service Management Server"
        },
        {
          "type": "website",
          "target": "Jira Software Cloud (bugbounty-test-<bugcrowd-name>.atlassian.net)"
        },
        {
          "type": "other",
          "target": "Jira Software Server"
        },
        {
          "type": "website",
          "target": "Jira Work Management Cloud formerly Jira Core (bugbounty-test-<bugcrowd-name>.atlassian.net)"
        },
        {
          "type": "other",
          "target": "Other - (all other Atlassian targets)"
        },
        {
          "type": "other",
          "target": "Sourcetree for macOS and Windows (https://www.sourcetreeapp.com/)"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": " bytebucket.org"
        },
        {
          "type": "website",
          "target": "*.bitbucket.io"
        },
        {
          "type": "website",
          "target": "Any internal or development services."
        },
        {
          "type": "website",
          "target": "Any repository that you are not an owner of - do not impact Atlassian customers in any way."
        },
        {
          "type": "website",
          "target": "First and third party apps and plugins from the marketplace are excluded from this bounty but may be in scope for https://bugcrowd.com/atlassianapps"
        },
        {
          "type": "other",
          "target": "HipChat (inc. HipChat Data Center, HipChat Desktop, HipChat Mobile)"
        },
        {
          "type": "other",
          "target": "Stride (inc. Stride Video, Stride Desktop, Stride Mobile)"
        },
        {
          "type": "website",
          "target": "https://blog.bitbucket.org"
        },
        {
          "type": "website",
          "target": "shop.atlassian.com"
        }
      ]
    }
  },
  {
    "name": "Atlassian Forge Platform",
    "url": "https://bugcrowd.com/atlassian-forge",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Forge Platform"
        },
        {
          "type": "api",
          "target": "GraphQL API (bugbounty-test-<bugcrowd-name>.atlassian.net/gateway/api/graphql)"
        },
        {
          "type": "other",
          "target": "https://www.npmjs.com/package/@forge/cli"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Atlassian-Built Apps",
    "url": "https://bugcrowd.com/atlassianapps",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": " Mobile Plugin for Confluence Data Center and Server - Data Center - https://marketplace.atlassian.com/apps/1218250/mobile-plugin-for-confluence-data-center-and-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": " Mobile Plugin for Confluence Data Center and Server - Server - https://marketplace.atlassian.com/apps/1218250/mobile-plugin-for-confluence-data-center-and-server?hosting=server"
        },
        {
          "type": "other",
          "target": " Mobile Plugin for Jira - Server - https://marketplace.atlassian.com/apps/1220151/mobile-plugin-for-jira-data-center-and-server?hosting=server"
        },
        {
          "type": "other",
          "target": "AWS Service Catalog for JSM Cloud - Cloud - https://marketplace.atlassian.com/apps/1221551/aws-service-catalog-for-jsm-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Add watchers at issue creation - Cloud - https://marketplace.atlassian.com/apps/1229183/add-watchers-at-issue-creation?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Admin Kit for Confluence Cloud - Cloud - https://marketplace.atlassian.com/apps/1225691/admin-kit-for-confluence-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Admin Kit for Jira Cloud - Cloud - https://marketplace.atlassian.com/apps/1225689/admin-kit-for-jira-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Advanced Roadmaps (formerly Portfolio) - DataCenter - https://marketplace.atlassian.com/apps/1212136/advanced-roadmaps-formerly-portfolio?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Advanced Roadmaps (formerly Portfolio) - Server - https://marketplace.atlassian.com/apps/1212136/advanced-roadmaps-formerly-portfolio?hosting=server"
        },
        {
          "type": "other",
          "target": "Advanced Roadmaps for Jira in Confluence - DataCenter - https://marketplace.atlassian.com/apps/1221237/advanced-roadmaps-for-jira-in-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Advanced Roadmaps for Jira in Confluence - Server - https://marketplace.atlassian.com/apps/1221237/advanced-roadmaps-for-jira-in-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "After Deployment Trigger for Bamboo - Server - https://marketplace.atlassian.com/apps/1216136/after-deployment-trigger-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Agent Notifications for Bamboo - Server - https://marketplace.atlassian.com/apps/1216177/agent-notifications-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Agent Usage Visualization for Bamboo - Server - https://marketplace.atlassian.com/apps/1215924/agent-usage-visualization-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Analytics for Confluence - Cloud - https://marketplace.atlassian.com/apps/1215795/analytics-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Announcement Plugin for Bamboo - Server - https://marketplace.atlassian.com/apps/1217289/announcement-plugin-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Application tunnels - DataCenter - https://marketplace.atlassian.com/apps/1227901/application-tunnels?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Application tunnels - Server - https://marketplace.atlassian.com/apps/1227901/application-tunnels?hosting=server"
        },
        {
          "type": "other",
          "target": "Archive Plugin for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1211094/archive-plugin-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Asana Importer Plugin for Jira - Server - https://marketplace.atlassian.com/apps/1213440/asana-importer-plugin-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - AWS Integration - DataCenter - https://marketplace.atlassian.com/apps/1218757/assets-aws-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - AWS Integration - Server - https://marketplace.atlassian.com/apps/1218757/assets-aws-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Azure Integration - DataCenter - https://marketplace.atlassian.com/apps/1218974/assets-azure-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Azure Integration - Server - https://marketplace.atlassian.com/apps/1218974/assets-azure-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Confluence Macro - DataCenter - https://marketplace.atlassian.com/apps/1216074/assets-confluence-macro?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Confluence Macro - Server - https://marketplace.atlassian.com/apps/1216074/assets-confluence-macro?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - DataCenter - https://marketplace.atlassian.com/apps/1212137/assets?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Device42 Integration - DataCenter - https://marketplace.atlassian.com/apps/1219632/assets-device42-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Device42 Integration - Server - https://marketplace.atlassian.com/apps/1219632/assets-device42-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Google Cloud Integration - DataCenter - https://marketplace.atlassian.com/apps/1219212/assets-google-cloud-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Google Cloud Integration - Server - https://marketplace.atlassian.com/apps/1219212/assets-google-cloud-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Jamf Integration - DataCenter - https://marketplace.atlassian.com/apps/1219908/assets-jamf-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Jamf Integration - Server - https://marketplace.atlassian.com/apps/1219908/assets-jamf-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Jira & Bitbucket Integration - DataCenter - https://marketplace.atlassian.com/apps/1217750/assets-jira-bitbucket-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Jira & Bitbucket Integration - Server - https://marketplace.atlassian.com/apps/1217750/assets-jira-bitbucket-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - NVD Integration - DataCenter - https://marketplace.atlassian.com/apps/1220353/assets-nvd-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - NVD Integration - Server - https://marketplace.atlassian.com/apps/1220353/assets-nvd-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - SCCM Integration - DataCenter - https://marketplace.atlassian.com/apps/1219094/assets-sccm-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - SCCM Integration - Server - https://marketplace.atlassian.com/apps/1219094/assets-sccm-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Server - https://marketplace.atlassian.com/apps/1212137/assets?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - ServiceNow Integration - DataCenter - https://marketplace.atlassian.com/apps/1219561/assets-servicenow-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - ServiceNow Integration - Server - https://marketplace.atlassian.com/apps/1219561/assets-servicenow-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Snow Integration - DataCenter - https://marketplace.atlassian.com/apps/1219298/assets-snow-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets - Snow Integration - Server - https://marketplace.atlassian.com/apps/1219298/assets-snow-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets - Tempo Integration - DataCenter - https://marketplace.atlassian.com/apps/1217751/assets-tempo-integration?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets Discovery - Cloud - https://marketplace.atlassian.com/apps/1214668/assets-discovery?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Assets Discovery - DataCenter - https://marketplace.atlassian.com/apps/1214668/assets-discovery?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Assets Discovery - Server - https://marketplace.atlassian.com/apps/1214668/assets-discovery?hosting=server"
        },
        {
          "type": "other",
          "target": "Assets Tempo Integration - Server - https://marketplace.atlassian.com/apps/1217751/assets-tempo-integration?hosting=server"
        },
        {
          "type": "other",
          "target": "Assign Reviewer Groups - Server - https://marketplace.atlassian.com/apps/1220798/assign-reviewer-groups?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlas for Jira Cloud - Cloud - https://marketplace.atlassian.com/apps/1228937/atlas-for-jira-cloud?hosting=cloud&tab=overview"
        },
        {
          "type": "other",
          "target": "Atlassian Cloud for Gmail - Cloud - https://marketplace.atlassian.com/apps/1219311/atlassian-cloud-for-gmail?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - DEB - Cloud - https://marketplace.atlassian.com/apps/1210992/atlassian-plugin-sdk-deb?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - DEB - Server - https://marketplace.atlassian.com/apps/1210992/atlassian-plugin-sdk-deb?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - Mac OS X - Server - https://marketplace.atlassian.com/apps/1210951/atlassian-plugin-sdk-mac-os-x?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - RPM - Server - https://marketplace.atlassian.com/apps/1210991/atlassian-plugin-sdk-rpm?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - TGZ - Server - https://marketplace.atlassian.com/apps/1210993/atlassian-plugin-sdk-tgz?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Plugin SDK - Windows - Server - https://marketplace.atlassian.com/apps/1210950/atlassian-plugin-sdk-windows?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian REST API Browser - Server - https://marketplace.atlassian.com/apps/1211542/atlassian-rest-api-browser?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Team Playbook blueprints - Server - https://marketplace.atlassian.com/apps/1216357/atlassian-team-playbook-blueprints?hosting=server"
        },
        {
          "type": "other",
          "target": "Atlassian Universal Plugin Manager - DataCenter - https://marketplace.atlassian.com/apps/23915/atlassian-universal-plugin-manager?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Atlassian Universal Plugin Manager - Server - https://marketplace.atlassian.com/apps/23915/atlassian-universal-plugin-manager?hosting=server"
        },
        {
          "type": "other",
          "target": "Auto Unapprove for Bitbucket Server - DataCenter - https://marketplace.atlassian.com/apps/1211449/auto-unapprove-for-bitbucket-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Auto Unapprove for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1211449/auto-unapprove-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "AutoLink Plugin for Jira - Server - https://marketplace.atlassian.com/apps/1211246/autolink-plugin-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Automation for Jira - Cloud - https://marketplace.atlassian.com/apps/1215460/automation-for-jira-server?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Automation for Jira - Data Center and Server - Server - https://marketplace.atlassian.com/apps/1215460/automation-for-jira-data-center-and-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Automation for Jira - DataCenter - https://marketplace.atlassian.com/apps/1215460/automation-for-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Automation for Jira - Server Lite - Server - https://marketplace.atlassian.com/apps/1211836/automation-for-jira-server-lite?hosting=server"
        },
        {
          "type": "other",
          "target": "Bamboo build status notifier - Server - https://marketplace.atlassian.com/apps/1224729/bamboo-build-status-notifier?hosting=server"
        },
        {
          "type": "other",
          "target": "Better Code Macro for Confluence - Cloud - https://marketplace.atlassian.com/apps/1214912/better-code-macro-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Bitbucket Cloud - https://trello.com/power-ups/588a331cc86ffbe08f5d2c67/bitbucket-cloud"
        },
        {
          "type": "other",
          "target": "Bitbucket Cloud Migration Assistant - Data Center - https://marketplace.atlassian.com/apps/1226610/bitbucket-cloud-migration-assistant?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Bitbucket Cloud Migration Assistant - Server - https://marketplace.atlassian.com/apps/1226610/bitbucket-cloud-migration-assistant?hosting=server"
        },
        {
          "type": "other",
          "target": "Bitbucket Cloud for Slack (Official) - Cloud - https://marketplace.atlassian.com/apps/1218781/bitbucket-cloud-for-slack-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Bitbucket Pipelines for Jira - Cloud - https://marketplace.atlassian.com/apps/1220820/bitbucket-pipelines-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Bitbucket Server Backup Client - Server - https://marketplace.atlassian.com/apps/1211500/bitbucket-server-backup-client?hosting=server"
        },
        {
          "type": "other",
          "target": "Bitbucket Server Protect Unmerged Hook - Data Center - https://marketplace.atlassian.com/apps/1211203/bitbucket-server-protect-unmerged-hook?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Bitbucket Server Protect Unmerged Hook - Server - https://marketplace.atlassian.com/apps/1211203/bitbucket-server-protect-unmerged-hook?hosting=server"
        },
        {
          "type": "other",
          "target": "Bitbucket Server for Slack (Official) - DataCenter - https://marketplace.atlassian.com/apps/1220729/bitbucket-server-for-slack-official?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Bitbucket Server for Slack (Official) - Server - https://marketplace.atlassian.com/apps/1220729/bitbucket-server-for-slack-official?hosting=server"
        },
        {
          "type": "other",
          "target": "Box - https://trello.com/power-ups/55a5d915446f517774210001/box"
        },
        {
          "type": "other",
          "target": "Build Times for Bamboo 5.10+ - Server - https://marketplace.atlassian.com/apps/1215965/build-times-for-bamboo-5-10?hosting=server"
        },
        {
          "type": "other",
          "target": "Bulk delete review files for Crucible - Server - https://marketplace.atlassian.com/apps/1215089/bulk-delete-review-files-for-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Card Repeater - https://trello.com/power-ups/57b47fb862d25a30298459b1/card-repeater"
        },
        {
          "type": "other",
          "target": "Card Snooze - https://trello.com/power-ups/58dd18bdccfca7af8311792e/card-snooze"
        },
        {
          "type": "other",
          "target": "Centralized license visibility - DataCenter - https://marketplace.atlassian.com/apps/1220745/centralized-license-visibility?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Centralized license visibility - Server - https://marketplace.atlassian.com/apps/1220745/centralized-license-visibility?hosting=server"
        },
        {
          "type": "other",
          "target": "Change Management Workflow for Jira Service Management - DataCenter - https://marketplace.atlassian.com/apps/1215175/change-management-workflow-for-jira-service-management?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Change Management Workflow for Jira Service Management - Server - https://marketplace.atlassian.com/apps/1215175/change-management-workflow-for-jira-service-management?hosting=server"
        },
        {
          "type": "other",
          "target": "Change Management for JSM - Server - https://marketplace.atlassian.com/apps/1215175/change-management-for-jsm?hosting=server"
        },
        {
          "type": "other",
          "target": "Cloud Compatibility for Jira - DataCenter - https://marketplace.atlassian.com/apps/1221117/cloud-compatibility-for-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Cloud Compatibility for Jira - Server - https://marketplace.atlassian.com/apps/1221117/cloud-compatibility-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Code Coverage for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1218271/code-coverage-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Comms Dashboard - Cloud - https://marketplace.atlassian.com/apps/1228153/comms-dashboard?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Conditional tasks for Bamboo - Server - https://marketplace.atlassian.com/apps/1219706/conditional-tasks-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Cloud - https://trello.com/power-ups/586be37142f94dc0871fbcbb/confluence-cloud"
        },
        {
          "type": "other",
          "target": "Confluence Cloud Migration Assistant - DataCenter - https://marketplace.atlassian.com/apps/1219672/confluence-cloud-migration-assistant?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Confluence Cloud Migration Assistant - Server - https://marketplace.atlassian.com/apps/1219672/confluence-cloud-migration-assistant?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Cloud for Microsoft Teams - Cloud - https://marketplace.atlassian.com/apps/1226127/confluence-cloud-for-microsoft-teams-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Confluence Cloud for Slack (Official) - Cloud - https://marketplace.atlassian.com/apps/1219518/confluence-cloud-for-slack-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Confluence Cloud for Slack - Cloud - https://marketplace.atlassian.com/apps/1219498/confluence-cloud-for-slack?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Confluence Issue Tab Plugin for Jira - Server - https://marketplace.atlassian.com/apps/1211312/confluence-issue-tab-plugin-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Server for Slack (Official) - DataCenter - https://marketplace.atlassian.com/apps/1220186/confluence-server-for-slack-official?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Confluence Server for Slack (Official) - Sever - https://marketplace.atlassian.com/apps/1220186/confluence-server-for-slack-official?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Source Editor - Server - https://marketplace.atlassian.com/apps/1210722/confluence-source-editor?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Trello Power-Up - Cloud - https://marketplace.atlassian.com/apps/1216623/confluence-trello-power-up?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Confluence recent edits overview - Cloud - https://marketplace.atlassian.com/apps/1224758/confluence-recent-edits-overview?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Continuous Plugin Deployment for Bamboo - Server - https://marketplace.atlassian.com/apps/602870/continuous-plugin-deployment-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Copy Source for Fisheye and Crucible - Server - https://marketplace.atlassian.com/apps/1215624/copy-source-for-fisheye-and-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Copy Space for Confluence - Server - https://marketplace.atlassian.com/apps/212/copy-space-for-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "Crucible build status - Server - https://marketplace.atlassian.com/apps/1224728/crucible-build-status?hosting=server"
        },
        {
          "type": "other",
          "target": "Custom Fields - https://trello.com/power-ups/56d5e249a98895a9797bebb9/custom-fields"
        },
        {
          "type": "other",
          "target": "Dashcards  - https://trello.com/power-ups/6048e897c73d032a983e2a7c/dashcards"
        },
        {
          "type": "other",
          "target": "Data Generator for Jira - Server - https://marketplace.atlassian.com/apps/1210725/data-generator-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Decisions Helper for Confluence - Cloud - https://marketplace.atlassian.com/apps/1226380/decisions-helper-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Delegated Directory Pruning for Crowd - Server - https://marketplace.atlassian.com/apps/1218630/delegated-directory-pruning-for-crowd?hosting=server"
        },
        {
          "type": "other",
          "target": "Dependency Graph Plugin for Bamboo - Server - https://marketplace.atlassian.com/apps/1215979/dependency-graph-plugin-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Developer Assistant for Confluence - Cloud - https://marketplace.atlassian.com/apps/1229446/developer-assistant-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Developer Assistant for Jira - Cloud - https://marketplace.atlassian.com/apps/1229343/developer-assistant-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Directory Scanning Plugin - Server - https://marketplace.atlassian.com/apps/30318/directory-scanning-plugin?hosting=server"
        },
        {
          "type": "other",
          "target": "Disable Referer for Bitbucket Server - DataCenter - https://marketplace.atlassian.com/apps/1214351/disable-referer-for-bitbucket-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Disable Referer for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1214351/disable-referer-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Embedded Marketplace for Confluence - Cloud - https://marketplace.atlassian.com/apps/1218875/embedded-marketplace-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Embedded Marketplace for Jira - Cloud - https://marketplace.atlassian.com/apps/1218864/embedded-marketplace-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Entity Property Tool for Jira - Cloud - https://marketplace.atlassian.com/apps/1214509/entity-property-tool-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Evernote - https://trello.com/power-ups/55a5d915446f517774210003/evernote"
        },
        {
          "type": "other",
          "target": "Fail Build Trigger for Bamboo - Server - https://marketplace.atlassian.com/apps/1215235/fail-build-trigger-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Favorites Dialog for Confluence - Server - https://marketplace.atlassian.com/apps/1214046/favorites-dialog-for-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "File Tagging Plugin for Crucible - Server - https://marketplace.atlassian.com/apps/1211738/file-tagging-plugin-for-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Form macro builder for Confluence - Cloud - https://marketplace.atlassian.com/apps/1225664/form-macro-builder-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Giphy - https://trello.com/power-ups/568c1415eeaeb62f5a43aa01/giphy"
        },
        {
          "type": "other",
          "target": "GitHub - https://trello.com/power-ups/55a5d916446f517774210004/github"
        },
        {
          "type": "other",
          "target": "GitHub for Jira - Cloud - https://marketplace.atlassian.com/apps/1219592/github-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "GitHub webhooks for Fisheye - Server - https://marketplace.atlassian.com/apps/1223584/github-webhooks-for-fisheye?hosting=server"
        },
        {
          "type": "other",
          "target": "Google Drive - https://trello.com/power-ups/55a5d916446f517774210006/google-drive"
        },
        {
          "type": "other",
          "target": "Google Drive for Confluence (Official) - Legacy Editor Only - Cloud - https://marketplace.atlassian.com/apps/1213092/google-drive-for-confluence-official-legacy-editor-only?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Google Hangouts - https://trello.com/power-ups/55a5d916446f517774210007/google-hangouts"
        },
        {
          "type": "other",
          "target": "Hackathon Workflow Alan - Cloud - https://marketplace.atlassian.com/apps/1227949/hackathon-workflow-alan?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Hackathon Workflow Alan - Data Center - https://marketplace.atlassian.com/apps/1227949/hackathon-workflow-alan?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Hackathon for Jira - Cloud - https://marketplace.atlassian.com/apps/1214757/hackathon-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Icons for Jira - Server - https://marketplace.atlassian.com/apps/1214988/icons-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Image Paste for Fisheye/Crucible - Server - https://marketplace.atlassian.com/apps/1215192/image-paste-for-fisheye-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Inbox Hook for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1211715/inbox-hook-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Ipython Notebook Viewer - Cloud - https://marketplace.atlassian.com/apps/1218117/ipython-notebook-viewer?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Issue Edit Notifications for Jira - Server - https://marketplace.atlassian.com/apps/1211504/issue-edit-notifications-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "JMeter Aggregator for Bamboo - Server - https://marketplace.atlassian.com/apps/5902/jmeter-aggregator-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "JavaScript Charts for Jira Cloud - Cloud - https://marketplace.atlassian.com/apps/1214527/javascript-charts-for-jira-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jenkins for Jira (official) - Cloud - https://marketplace.atlassian.com/apps/1227791/jenkins-for-jira-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jenkins integration for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1222132/jenkins-integration-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Jet by Jira Align - Cloud - https://marketplace.atlassian.com/apps/1221602/jet-by-jira-align?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jet by Jira Align - DataCenter - https://marketplace.atlassian.com/apps/1221602/jet-by-jira-align?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Jet by Jira Align - Server - https://marketplace.atlassian.com/apps/1221602/jet-by-jira-align?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira - https://trello.com/power-ups/586be36326cc4c7e9f70beb3/jira"
        },
        {
          "type": "other",
          "target": "Jira Align - https://trello.com/power-ups/5e3886cd2ae34410748d0d5b/jira-align-"
        },
        {
          "type": "other",
          "target": "Jira Calendar Plugin - Server - https://marketplace.atlassian.com/apps/293/jira-calendar-plugin?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira Charting Plugin  - Server - https://marketplace.atlassian.com/apps/288/jira-charting-plugin?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira Cloud Migration Assistant - DataCenter - https://marketplace.atlassian.com/apps/1222010/jira-cloud-migration-assistant?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Jira Cloud Migration Assistant - Server - https://marketplace.atlassian.com/apps/1222010/jira-cloud-migration-assistant?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira Cloud Power-Up for Trello - Cloud - https://marketplace.atlassian.com/apps/1216850/jira-cloud-power-up-for-trello?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for CRM (Official) - Cloud - https://marketplace.atlassian.com/apps/1217661/jira-cloud-for-crm-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Excel (official) - Cloud - https://marketplace.atlassian.com/apps/1221301/jira-cloud-for-excel-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Google Sheets (Official) - Cloud - https://marketplace.atlassian.com/apps/1220382/jira-cloud-for-google-sheets-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Microsoft Teams - Cloud - https://marketplace.atlassian.com/apps/1226478/jira-cloud-for-microsoft-teams-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Outlook (Official) - Cloud - https://marketplace.atlassian.com/apps/1220666/jira-cloud-for-outlook-official?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Slack (Official) - Cloud - https://marketplace.atlassian.com/apps/1216863/jira-cloud-for-slack-official?hosting=cloud&tab=overview"
        },
        {
          "type": "other",
          "target": "Jira Cloud for Slack - Cloud - https://marketplace.atlassian.com/apps/1215948/jira-cloud-for-slack?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Enterprise Scale Assessment Tool - DataCenter - https://marketplace.atlassian.com/apps/1227744/jira-enterprise-scale-assessment-tool?hosting=datacenter&tab=overview"
        },
        {
          "type": "other",
          "target": "Jira Enterprise Scale Assessment Tool - Server - https://marketplace.atlassian.com/apps/1227744/jira-enterprise-scale-assessment-tool?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira Server for Slack (Official) - DataCenter - https://marketplace.atlassian.com/apps/1220099/jira-server-for-slack-official?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Jira Server for Slack (Official) - Server - https://marketplace.atlassian.com/apps/1220099/jira-server-for-slack-official?hosting=server"
        },
        {
          "type": "other",
          "target": "Jira Service Management Widget - Cloud - https://marketplace.atlassian.com/apps/1217230/jira-service-management-widget?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira Trello Power-Up - Cloud - https://marketplace.atlassian.com/apps/1216625/jira-trello-power-up?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Jira to Jira Issue Copy - Server - https://marketplace.atlassian.com/apps/678725/jira-to-jira-issue-copy?hosting=server"
        },
        {
          "type": "other",
          "target": "Look and Feel for Bitbucket Server - Datacenter - https://marketplace.atlassian.com/apps/1212632/look-and-feel-for-bitbucket-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Look and Feel for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1212632/look-and-feel-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Look and Feel for Fisheye and Crucible - Server - https://marketplace.atlassian.com/apps/1216128/look-and-feel-for-fisheye-and-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "MailChimp - https://trello.com/power-ups/55a5d917446f51777421000c/mailchimp"
        },
        {
          "type": "other",
          "target": "Mandatory Reviewers for Crucible - Server - https://marketplace.atlassian.com/apps/1219472/mandatory-reviewers-for-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Microsoft OneDrive for Business - Legacy Editor Only - Cloud - https://marketplace.atlassian.com/apps/1221882/microsoft-onedrive-for-business-legacy-editor-only?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Microsoft Teams for Bitbucket Cloud - Cloud - https://marketplace.atlassian.com/apps/1218941/microsoft-teams-for-bitbucket-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Microsoft Teams for Confluence Cloud - Cloud - https://marketplace.atlassian.com/apps/1219516/microsoft-teams-for-confluence-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Microsoft Teams for Jira - DataCenter - https://marketplace.atlassian.com/apps/1217836/microsoft-teams-for-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Microsoft Teams for Jira - Server - https://marketplace.atlassian.com/apps/1217836/microsoft-teams-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Mobile Connect Plugin for Jira - Server - https://marketplace.atlassian.com/apps/322837/mobile-connect-plugin-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Mobile Plugin for Jira - DataCenter - https://marketplace.atlassian.com/apps/1220151/mobile-plugin-for-jira-data-center-and-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "My Reminders for Jira - Cloud - https://marketplace.atlassian.com/apps/1212778/my-reminders-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "OneDrive - https://trello.com/power-ups/5940440775fbe327abd3329f/onedrive"
        },
        {
          "type": "other",
          "target": "Opsgenie - Cloud - https://marketplace.atlassian.com/apps/1222147/opsgenie?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Opsgenie Incident Timeline - Cloud - https://marketplace.atlassian.com/apps/1221251/opsgenie-incident-timeline?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Opsgenie Incident Timeline EU - Cloud - https://marketplace.atlassian.com/apps/1221312/opsgenie-incident-timeline-eu?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Package Tracker - https://trello.com/power-ups/55a5d917446f51777421000d/package-tracker"
        },
        {
          "type": "other",
          "target": "Permission Lockdown for Bitbucket Server - DataCenter - https://marketplace.atlassian.com/apps/1217941/permission-lockdown-for-bitbucket-server?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Permission Lockdown for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1217941/permission-lockdown-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Pre-Post Build Command Runner - Server - https://marketplace.atlassian.com/apps/5581/pre-post-build-command-runner?hosting=server"
        },
        {
          "type": "other",
          "target": "Predator Plugin for Bamboo - Server - https://marketplace.atlassian.com/apps/1212736/predator-plugin-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Previous/next navigation - Cloud - https://marketplace.atlassian.com/apps/1223382/previous-next-navigation?hosting=cloud"
        },
        {
          "type": "other",
          "target": "ProForma Lite: Forms & Checklists - Datacenter - https://marketplace.atlassian.com/apps/1219499/proforma-lite-forms-checklists?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "ProForma Lite: Forms & Checklists - Server - https://marketplace.atlassian.com/apps/1219499/proforma-lite-forms-checklists?hosting=server"
        },
        {
          "type": "other",
          "target": "ProForma: Forms & Checklist for Jira - Datacenter - https://marketplace.atlassian.com/apps/1215833/proforma-forms-checklist-for-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "ProForma: Forms & Checklist for Jira - Server - https://marketplace.atlassian.com/apps/1215833/proforma-forms-checklist-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Project transfer for Crucible - Server - https://marketplace.atlassian.com/apps/1221227/project-transfer-for-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Questions for Confluence - Cloud - https://marketplace.atlassian.com/apps/1211644/questions-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Questions for Confluence - DataCenter - https://marketplace.atlassian.com/apps/1211644/questions-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Questions for Confluence - Server - https://marketplace.atlassian.com/apps/1211644/questions-for-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "Queue Priority Plugin for Bamboo - Server - https://marketplace.atlassian.com/apps/1216287/queue-priority-plugin-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Read Me - https://trello.com/power-ups/5a2de0c41ae4a1537bb0055d/read-me"
        },
        {
          "type": "other",
          "target": "Reconcile unknown attachments - Data Center - https://marketplace.atlassian.com/apps/1225406/reconcile-unknown-attachments?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Reconcile unknown attachments - Server - https://marketplace.atlassian.com/apps/1225406/reconcile-unknown-attachments?hosting=server"
        },
        {
          "type": "other",
          "target": "Release Plugin for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1218118/release-plugin-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Release Report for Fisheye - Server - https://marketplace.atlassian.com/apps/772972/release-report-for-fisheye?hosting=server"
        },
        {
          "type": "other",
          "target": "Repository QuickAdd for Fisheye/Crucible - Server - https://marketplace.atlassian.com/apps/1212100/repository-quickadd-for-fisheye-crucible?hosting=server"
        },
        {
          "type": "other",
          "target": "Review Creator for Fisheye - Server - https://marketplace.atlassian.com/apps/14896/review-creator-for-fisheye?hosting=server"
        },
        {
          "type": "other",
          "target": "Reviewer Suggester for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1211619/reviewer-suggester-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Rich Text Gadget for Jira - Cloud - https://marketplace.atlassian.com/apps/1214632/rich-text-gadget-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "SBT Task Plugin for Bamboo - Server - https://marketplace.atlassian.com/apps/1214713/sbt-task-plugin-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "SSL for Jira - Server - https://marketplace.atlassian.com/apps/1211087/ssl-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "SSO for Atlassian Server and Data Center - DataCenter - https://marketplace.atlassian.com/apps/1216096/sso-for-atlassian-server-and-data-center?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "SSO for Atlassian Server and Data Center - Server - https://marketplace.atlassian.com/apps/1216096/sso-for-atlassian-server-and-data-center?hosting=server"
        },
        {
          "type": "other",
          "target": "Salesforce - https://trello.com/power-ups/55a5d917446f517774210009/salesforce"
        },
        {
          "type": "other",
          "target": "Slack - https://trello.com/power-ups/55a5d917446f51777421000a/slack"
        },
        {
          "type": "other",
          "target": "Spreadsheets for Jira Cloud - Cloud - https://marketplace.atlassian.com/apps/1220711/spreadsheets-for-jira-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Statuspage for Jira - Cloud - https://marketplace.atlassian.com/apps/1219451/statuspage-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Statuspage for Jira Service Management - Cloud - https://marketplace.atlassian.com/apps/1216079/statuspage-for-jira-service-management?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Statuspage for Jira Service Management - DataCenter - https://marketplace.atlassian.com/apps/1216079/statuspage-for-jira-service-management?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Statuspage for Jira Service Management - Server - https://marketplace.atlassian.com/apps/1216079/statuspage-for-jira-service-management?hosting=server"
        },
        {
          "type": "other",
          "target": "Sticker Printer for Jira - Cloud - https://marketplace.atlassian.com/apps/1222124/sticker-printer-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "SurveyMonkey - https://trello.com/power-ups/568c143d95adcd7308cbc3fb/surveymonkey"
        },
        {
          "type": "other",
          "target": "Team Calendars for Confluence - Cloud - https://marketplace.atlassian.com/apps/72307/team-calendars-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Team Calendars for Confluence - DataCenter - https://marketplace.atlassian.com/apps/72307/team-calendars-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Team Calendars for Confluence - Server - https://marketplace.atlassian.com/apps/72307/team-calendars-for-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "Thready - Give Tomcat threads a name - Server - https://marketplace.atlassian.com/apps/1214899/thready-give-tomcat-threads-a-name?hosting=server"
        },
        {
          "type": "other",
          "target": "Toolkit Plugin for Jira - Server - https://marketplace.atlassian.com/apps/5142/toolkit-plugin-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Training for Jira - Cloud - https://marketplace.atlassian.com/apps/1217110/training-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Training for Jira - DataCenter - https://marketplace.atlassian.com/apps/1217110/training-for-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Training for Jira - Server - https://marketplace.atlassian.com/apps/1217110/training-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Tree Search for Confluence - Cloud - https://marketplace.atlassian.com/apps/1219829/tree-search-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Trello Connector for Jira Server - Server - https://marketplace.atlassian.com/apps/1218011/trello-connector-for-jira-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Bamboo - Data Center - https://marketplace.atlassian.com/apps/1217745/troubleshooting-and-support-bamboo?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Bamboo - Server - https://marketplace.atlassian.com/apps/1217745/troubleshooting-and-support-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Confluence - DataCenter - https://marketplace.atlassian.com/apps/1217697/troubleshooting-and-support-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Confluence - Server - https://marketplace.atlassian.com/apps/1217697/troubleshooting-and-support-confluence?hosting=server"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Crowd - Server - https://marketplace.atlassian.com/apps/1221430/troubleshooting-and-support-crowd?hosting=server"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - FeCru - Server - https://marketplace.atlassian.com/apps/1217747/troubleshooting-and-support-fecru?hosting=server"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Jira - DataCenter - https://marketplace.atlassian.com/apps/1217696/troubleshooting-and-support-jira?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Troubleshooting and Support - Jira - Server - https://marketplace.atlassian.com/apps/1217696/troubleshooting-and-support-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Twitter - https://trello.com/power-ups/55a5d917446f51777421000b/twitter"
        },
        {
          "type": "other",
          "target": "VFS for Git for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1217957/vfs-for-git-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Variable tasks for Bamboo - Server - https://marketplace.atlassian.com/apps/1212549/variable-tasks-for-bamboo?hosting=server"
        },
        {
          "type": "other",
          "target": "Web Post Hooks for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1211539/web-post-hooks-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Who's Looking for Jira Cloud - Cloud - https://marketplace.atlassian.com/apps/1211596/whos-looking-for-jira-cloud?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Workflow Screenshot for Jira - Server - https://marketplace.atlassian.com/apps/1215704/workflow-screenshot-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "Xcode for Bitbucket Server - Server - https://marketplace.atlassian.com/apps/1219105/xcode-for-bitbucket-server?hosting=server"
        },
        {
          "type": "other",
          "target": "Zendesk - https://trello.com/power-ups/56940ede94fd60cf95f7ce6a/zendesk"
        },
        {
          "type": "other",
          "target": "opsgenie-bamboo-plugin - Server - https://marketplace.atlassian.com/apps/1224300/opsgenie-bamboo-plugin?hosting=server"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Calendar Power-Up"
        },
        {
          "type": "website",
          "target": "Card Aging Power-Up"
        },
        {
          "type": "other",
          "target": "Confluence Slack Automation Integration by Halp - Cloud - https://marketplace.atlassian.com/apps/1222365/halp-answers-for-confluence-in-slack?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Halp - Slack and Microsoft Teams Jira Integration - Cloud - https://marketplace.atlassian.com/apps/1220442/halp-two-way-slack-integration-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Halp - Slack and Microsoft Teams Jira Integration - Server - https://marketplace.atlassian.com/apps/1220442/halp-two-way-slack-integration-for-jira?hosting=server"
        },
        {
          "type": "website",
          "target": "List Limits Power-Up"
        },
        {
          "type": "website",
          "target": "Voting Power-Up"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com (Website)"
        },
        {
          "type": "other",
          "target": "https://trello.com/power-ups/*"
        }
      ]
    }
  },
  {
    "name": "Backblaze",
    "url": "https://bugcrowd.com/backblaze",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "B2 APIs (*.backblazeb2.com)"
        },
        {
          "type": "android",
          "target": "Backblaze Android mobile application"
        },
        {
          "type": "website",
          "target": "Backblaze Website (*.backblaze.com)"
        },
        {
          "type": "ios",
          "target": "Backblaze iOS mobile application"
        },
        {
          "type": "other",
          "target": "Git Repositories (b2-sdk-java & B2 Command Line Tool)"
        },
        {
          "type": "other",
          "target": "Mac Personal Backup Clients"
        },
        {
          "type": "other",
          "target": "Mac Restore Downloaders"
        },
        {
          "type": "other",
          "target": "Windows Personal Backup Clients"
        },
        {
          "type": "other",
          "target": "Windows Restore Downloaders"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Appliances - Barracuda Networks, Inc.",
    "url": "https://bugcrowd.com/barracuda",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Barracuda ADC"
        },
        {
          "type": "other",
          "target": "Barracuda CloudGen Firewall"
        },
        {
          "type": "other",
          "target": "Barracuda Email Security Gateway"
        },
        {
          "type": "other",
          "target": "Barracuda Message Archiver"
        },
        {
          "type": "other",
          "target": "Barracuda SSLVPN"
        },
        {
          "type": "other",
          "target": "Barracuda Web Application Firewall"
        },
        {
          "type": "other",
          "target": "Barracuda Web Security Gateway"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "BigCommerce",
    "url": "https://bugcrowd.com/bigcommerce",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bigcommerce.com"
        },
        {
          "type": "website",
          "target": "*.bigcommerce.net"
        },
        {
          "type": "android",
          "target": "BigCommerce Android"
        },
        {
          "type": "ios",
          "target": "BigCommerce iOS"
        },
        {
          "type": "website",
          "target": "https://*.YOUR-TESTING-STORE.mybigcommerce.com/"
        },
        {
          "type": "website",
          "target": "https://STORE-YOURSTOREHash.mybigcommerce.com/"
        },
        {
          "type": "website",
          "target": "https://bigcommerce.com/blog"
        },
        {
          "type": "website",
          "target": "https://bigcommerce.com/make-it-big"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Binance",
    "url": "https://bugcrowd.com/binance",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.binance.com"
        },
        {
          "type": "website",
          "target": "*.bnbchain.org"
        },
        {
          "type": "other",
          "target": "BNB Beacon Chain"
        },
        {
          "type": "other",
          "target": "BNB Smart Chain"
        },
        {
          "type": "website",
          "target": "Binance Connect"
        },
        {
          "type": "other",
          "target": "Binance Desktop Application"
        },
        {
          "type": "android",
          "target": "Binance Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "Binance Mobile Application for iOS"
        },
        {
          "type": "other",
          "target": "Binance Wallet - Chrome Extension"
        },
        {
          "type": "other",
          "target": "Binance Wallet - Firefox Extension"
        },
        {
          "type": "other",
          "target": "Binance macOS Application"
        },
        {
          "type": "android",
          "target": "Trustwallet Android App"
        },
        {
          "type": "ios",
          "target": "Trustwallet iOS App"
        },
        {
          "type": "api",
          "target": "api.binance.com"
        },
        {
          "type": "website",
          "target": "binance.us"
        },
        {
          "type": "api",
          "target": "dex.binance.org"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/bep3-deputy"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/bep3-smartcontracts"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/bsc"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/bsc-genesis-contract"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/bsc-relayer"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/ledger-app-binance"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/oracle-relayer"
        },
        {
          "type": "other",
          "target": "https://github.com/bnb-chain/tss-lib"
        },
        {
          "type": "other",
          "target": "https://github.com/trustwallet/wallet-core/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.binance.org"
        },
        {
          "type": "website",
          "target": "*.buildnbuild.dev"
        },
        {
          "type": "website",
          "target": "*.trustwallet.com"
        },
        {
          "type": "website",
          "target": "*.trustwalletapp.com"
        },
        {
          "type": "website",
          "target": "binance.sg"
        },
        {
          "type": "website",
          "target": "community.binance.org"
        },
        {
          "type": "website",
          "target": "support.binance.*"
        }
      ]
    }
  },
  {
    "name": "Bitdefender",
    "url": "https://bugcrowd.com/bitdefender",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 15000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bitdefender.com"
        },
        {
          "type": "website",
          "target": "*.bitdefender.net"
        },
        {
          "type": "other",
          "target": "Bitdefender Antimalware Engines"
        },
        {
          "type": "other",
          "target": "Bitdefender GravityZone Business Security "
        },
        {
          "type": "other",
          "target": "Bitdefender Total Security"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "*ntsa* (domains, services, apps)"
        },
        {
          "type": "website",
          "target": "partner-marketing.bitdefender.com/"
        }
      ]
    }
  },
  {
    "name": "Bitdefender Box v2",
    "url": "https://bugcrowd.com/bitdefenderbox2",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "iot",
          "target": "Bitdefender BOX v2"
        }
      ],
      "out_of_scope": [
        {
          "type": "android",
          "target": "Bitdefender Central (Android App)"
        },
        {
          "type": "ios",
          "target": "Bitdefender Central (iOS App)"
        },
        {
          "type": "website",
          "target": "central.bitdefender.com"
        }
      ]
    }
  },
  {
    "name": "BitDiscovery",
    "url": "https://bugcrowd.com/bitdiscovery",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bitdiscovery.com"
        },
        {
          "type": "website",
          "target": "Any publicly facing asset of BitDiscovery (ASNs, domains, ip addresses, etc)"
        },
        {
          "type": "website",
          "target": "assetinventory.bugcrowd.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Bitget",
    "url": "https://bugcrowd.com/bitget-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bitget.com"
        },
        {
          "type": "api",
          "target": "Bitget API"
        },
        {
          "type": "android",
          "target": "Bitget Android App"
        },
        {
          "type": "ios",
          "target": "Bitget iOS App"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://affiliates.bitget.com/login"
        }
      ]
    }
  },
  {
    "name": "Blackbaud Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/blackbaud-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://*.blackbaud.com/*"
        },
        {
          "type": "website",
          "target": "https://*.blackbaud.net/*"
        },
        {
          "type": "website",
          "target": "https://*.blackbaudhosting.com/*"
        },
        {
          "type": "website",
          "target": "https://*.blackbaudondemand.com/*"
        },
        {
          "type": "website",
          "target": "https://*.justgiving.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "http://community.blackbaud.com/"
        },
        {
          "type": "website",
          "target": "https://app.blackbaud.com/hostnet"
        }
      ]
    }
  },
  {
    "name": "Bureau of Land Management",
    "url": "https://bugcrowd.com/blm-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.abandonedmines.gov"
        },
        {
          "type": "website",
          "target": "*.blm.gov"
        },
        {
          "type": "website",
          "target": "*.nifc.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Blue Jeans Network",
    "url": "https://bugcrowd.com/bluejeans",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "BlueJeans Android Application"
        },
        {
          "type": "other",
          "target": "BlueJeans Browser-based Web Meeting Clients"
        },
        {
          "type": "other",
          "target": "BlueJeans Mac Client"
        },
        {
          "type": "other",
          "target": "BlueJeans Windows Client"
        },
        {
          "type": "ios",
          "target": "BlueJeans iOS Application"
        },
        {
          "type": "website",
          "target": "https://a2m.bluejeans.com"
        },
        {
          "type": "api",
          "target": "https://api.bluejeans.com/"
        },
        {
          "type": "website",
          "target": "https://bluejeans.com/"
        },
        {
          "type": "other",
          "target": "https://github.com/bluejeans/android-client-sdk"
        },
        {
          "type": "other",
          "target": "https://huddle.bluejeans.com"
        },
        {
          "type": "website",
          "target": "https://primetime.bluejeans.com"
        },
        {
          "type": "other",
          "target": "https://static.bluejeans.com/"
        },
        {
          "type": "website",
          "target": "https://www.bluejeans.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://a.bluejeans.com/"
        },
        {
          "type": "website",
          "target": "https://community.bluejeans.com"
        },
        {
          "type": "website",
          "target": "https://hub.bluejeans.com"
        },
        {
          "type": "website",
          "target": "https://www-a.bluejeans.com/"
        },
        {
          "type": "website",
          "target": "https://www-dev.bluejeans.com/"
        }
      ]
    }
  },
  {
    "name": "Braze Public BB",
    "url": "https://bugcrowd.com/braze-bb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "http://security-testing-env-dashboard.k8s.test-001.d-usw-2.braze.com"
        },
        {
          "type": "website",
          "target": "https://bug-bounty.braze.com/"
        },
        {
          "type": "api",
          "target": "https://security-testing-env-api.k8s.test-001.d-usw-2.braze.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "*.appboy.com"
        },
        {
          "type": "other",
          "target": "*.braze.com"
        },
        {
          "type": "other",
          "target": "*.braze.eu"
        },
        {
          "type": "other",
          "target": "Any Braze Owned Host not listed as in Scope"
        },
        {
          "type": "website",
          "target": "https://bounty-allstars.braze.com/"
        }
      ]
    }
  },
  {
    "name": "Bugcrowd",
    "url": "https://bugcrowd.com/bugcrowd",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "Crowdcontrol"
        },
        {
          "type": "api",
          "target": "api.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "bugcrowd.com"
        },
        {
          "type": "website",
          "target": "docs.bugcrowd.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "assetinventory.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "blog.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "community.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "email.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "email.forum.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "events.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "forum.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "go.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "pages.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "researcherdocs.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "www.bugcrowd.com"
        }
      ]
    }
  },
  {
    "name": "Bullish.com",
    "url": "https://bugcrowd.com/bullish",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 12000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://bullish.com/"
        },
        {
          "type": "website",
          "target": "https://investor.bullish.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.bullish.com"
        },
        {
          "type": "website",
          "target": "https://bugbounty.bullish-test.com"
        }
      ]
    }
  },
  {
    "name": "Bullish exchange",
    "url": "https://bugcrowd.com/bullish-exchange",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 25000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "https://api.bugbounty.bullish-test.com"
        },
        {
          "type": "website",
          "target": "https://bugbounty.bullish-test.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.bullish.com/"
        }
      ]
    }
  },
  {
    "name": "Bybit",
    "url": "https://bugcrowd.com/bybit",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://www.bybit.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Caffeine",
    "url": "https://bugcrowd.com/caffeine",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*.rtcdn.caffeine.tv"
        },
        {
          "type": "android",
          "target": "Caffeine Android Application\t"
        },
        {
          "type": "ios",
          "target": "Caffeine iOS Application"
        },
        {
          "type": "other",
          "target": "caffeine-helper.x64.exe"
        },
        {
          "type": "other",
          "target": "caffeine-helper.x86.exe"
        },
        {
          "type": "other",
          "target": "caffeine.exe"
        },
        {
          "type": "api",
          "target": "https://api.caffeine.tv/"
        },
        {
          "type": "website",
          "target": "https://build.caffeine.tv/"
        },
        {
          "type": "api",
          "target": "https://images.caffeine.tv/"
        },
        {
          "type": "api",
          "target": "https://payments.caffeine.tv"
        },
        {
          "type": "website",
          "target": "https://preview.caffeine.tv/"
        },
        {
          "type": "api",
          "target": "https://realtime.caffeine.tv/"
        },
        {
          "type": "other",
          "target": "https://static.caffeine.tv/"
        },
        {
          "type": "api",
          "target": "https://v-cf.caffeine.tv"
        },
        {
          "type": "website",
          "target": "https://www.caffeine.tv/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any Third Party Software Applications (Zendesk, etc)"
        },
        {
          "type": "website",
          "target": "Caffeine.custhelp.com"
        },
        {
          "type": "api",
          "target": "https://events.caffeine.tv/"
        }
      ]
    }
  },
  {
    "name": "Canva",
    "url": "https://bugcrowd.com/canva",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.canva-apps.cn"
        },
        {
          "type": "website",
          "target": "*.canva-apps.com"
        },
        {
          "type": "website",
          "target": "*.canva.cn"
        },
        {
          "type": "website",
          "target": "*.canva.com"
        },
        {
          "type": "android",
          "target": "Canva (Android)"
        },
        {
          "type": "other",
          "target": "Canva (Chrome Extension)"
        },
        {
          "type": "ios",
          "target": "Canva (iOS)"
        },
        {
          "type": "other",
          "target": "Canva Developer Platform"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "livecast.canva.cn"
        }
      ]
    }
  },
  {
    "name": "Cash App",
    "url": "https://bugcrowd.com/cashapp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 8000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.cash.app"
        },
        {
          "type": "website",
          "target": "*.cashstaging.app"
        },
        {
          "type": "website",
          "target": "*.joinverse.com"
        },
        {
          "type": "website",
          "target": "*.verse.events"
        },
        {
          "type": "website",
          "target": "*.verse.me"
        },
        {
          "type": "android",
          "target": "Cash App Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "Cash App Mobile Application for iOS"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Cengage VDP",
    "url": "https://bugcrowd.com/cengage-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " www.pmguidedreading.com"
        },
        {
          "type": "website",
          "target": "admin.iqcentral.cengage.com.au"
        },
        {
          "type": "website",
          "target": "api.iqcentral.cengage.com.au"
        },
        {
          "type": "website",
          "target": "api.nelsonhub.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "app.pmecollection.com.au"
        },
        {
          "type": "website",
          "target": "cengage.co.nz "
        },
        {
          "type": "website",
          "target": "cengage.com.au"
        },
        {
          "type": "website",
          "target": "examplus.cengage.com"
        },
        {
          "type": "website",
          "target": "gotit.net.au/dosage-calculations"
        },
        {
          "type": "website",
          "target": "http://www.chiltondiy.com/"
        },
        {
          "type": "website",
          "target": "https://*.cengage.com"
        },
        {
          "type": "website",
          "target": "https://*.cengagebrain.com/*"
        },
        {
          "type": "website",
          "target": "https://milady.cengage.com/"
        },
        {
          "type": "website",
          "target": "https://s-nglsync.cengage.com/provisionapi/NglSyncSamlSsoInit.ashx?token=[%District Specific Token%]&amp;username=[%Username%]"
        },
        {
          "type": "website",
          "target": "https://s-nglsync.cengage.com/rostering"
        },
        {
          "type": "website",
          "target": "https://www.cengage.com/"
        },
        {
          "type": "website",
          "target": "https://www.ed2go.com/"
        },
        {
          "type": "website",
          "target": "keep-up.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "nldcomprehension.com"
        },
        {
          "type": "website",
          "target": "pmolcards.com"
        },
        {
          "type": "website",
          "target": "pmwriting.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "static.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "video.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "ws.cengagelearning.com.au"
        },
        {
          "type": "website",
          "target": "www.nelsonnet.com.au"
        },
        {
          "type": "website",
          "target": "www.nldcomprehension.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "69.32.200.139"
        },
        {
          "type": "website",
          "target": "compassprod.cengage.com"
        },
        {
          "type": "website",
          "target": "gpms.cengage.com"
        },
        {
          "type": "website",
          "target": "https://www.gale.com/databases/gale-analytics"
        },
        {
          "type": "website",
          "target": "https://www.gale.com/primary-sources/digital-humanities-webinar"
        },
        {
          "type": "website",
          "target": "https://www.gale.com/primary-sources/need-to-know/trial-request"
        },
        {
          "type": "website",
          "target": "https://www.gale.com/public/small-library-support-program/form"
        },
        {
          "type": "website",
          "target": "jobiak.cengage.com"
        }
      ]
    }
  },
  {
    "name": "Centrify",
    "url": "https://bugcrowd.com/centrify",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "                Centrify Privilege Service Portal"
        },
        {
          "type": "other",
          "target": "Centrify Agent for Windows"
        },
        {
          "type": "other",
          "target": "Centrify Cloud Connector"
        },
        {
          "type": "api",
          "target": "Centrify Service API"
        },
        {
          "type": "other",
          "target": "Local Client Launcher "
        },
        {
          "type": "api",
          "target": "account-api.io.centrify.com\t"
        },
        {
          "type": "website",
          "target": "account.io.centrify.com\t"
        },
        {
          "type": "website",
          "target": "pod12.centrify.com"
        },
        {
          "type": "website",
          "target": "pod23.centrify.com"
        },
        {
          "type": "website",
          "target": "www.centrify.com\t"
        }
      ],
      "out_of_scope": [
        {
          "type": "ios",
          "target": "Centrify  iOS App"
        },
        {
          "type": "android",
          "target": "Centrify Android App"
        },
        {
          "type": "other",
          "target": "Centrify Browser Extension"
        }
      ]
    }
  },
  {
    "name": "Chia Network",
    "url": "https://bugcrowd.com/chia-network-bb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Chia BLS Signatures"
        },
        {
          "type": "other",
          "target": "Chia Plotter"
        },
        {
          "type": "other",
          "target": "Chia Verifiable Delay Functions (VDF)"
        },
        {
          "type": "other",
          "target": "Chia core"
        },
        {
          "type": "other",
          "target": "Chia desktop"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Council of the Inspectors General on Integrity and Efficiency Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/cigie-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.cigie.gov"
        },
        {
          "type": "website",
          "target": "*.ignet.gov"
        },
        {
          "type": "website",
          "target": "*.oversight.gov"
        },
        {
          "type": "website",
          "target": "*.pandemicoversight.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Cisco Meraki",
    "url": "https://bugcrowd.com/ciscomeraki",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.ikarem.io"
        },
        {
          "type": "website",
          "target": "*.meraki.com"
        },
        {
          "type": "website",
          "target": "*.network-auth.com"
        },
        {
          "type": "api",
          "target": "API keys originating from or accessing Cisco Meraki infrastructure"
        },
        {
          "type": "other",
          "target": "Cisco Meraki Dashboard Mobile Application (iOS and Android)"
        },
        {
          "type": "hardware",
          "target": "Cisco Meraki MR Access Points"
        },
        {
          "type": "hardware",
          "target": "Cisco Meraki MS Switches"
        },
        {
          "type": "hardware",
          "target": "Cisco Meraki MV Security Cameras"
        },
        {
          "type": "hardware",
          "target": "Cisco Meraki MX Security Appliances"
        },
        {
          "type": "other",
          "target": "Cisco Meraki Systems Manager"
        },
        {
          "type": "other",
          "target": "Cisco Meraki Virtual Security Appliances"
        },
        {
          "type": "hardware",
          "target": "Cisco Meraki Z Series (Z1,Z3(C))"
        },
        {
          "type": "website",
          "target": "meraki.cisco.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "hardware",
          "target": "Cisco Meraki MC Phones"
        },
        {
          "type": "api",
          "target": "Customer API Keys"
        },
        {
          "type": "website",
          "target": "community-staging.meraki.com"
        },
        {
          "type": "website",
          "target": "community.meraki.com"
        },
        {
          "type": "website",
          "target": "developers.meraki.com"
        },
        {
          "type": "website",
          "target": "meraki.cisco.com/form/contact"
        },
        {
          "type": "website",
          "target": "merakipartners.com"
        },
        {
          "type": "website",
          "target": "smhelp.meraki.com"
        }
      ]
    }
  },
  {
    "name": "ClickHouse",
    "url": "https://bugcrowd.com/clickhouse",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "ClickHouse Cloud environment hosted by ClickHouse"
        },
        {
          "type": "website",
          "target": "https://clickhouse.cloud/"
        },
        {
          "type": "other",
          "target": "https://github.com/ClickHouse/ClickHouse"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Cloudinary",
    "url": "https://bugcrowd.com/cloudinary",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "https://api.cloudinary.com"
        },
        {
          "type": "website",
          "target": "https://cloudinary.com/console"
        },
        {
          "type": "api",
          "target": "https://res.cloudinary.com"
        },
        {
          "type": "website",
          "target": "widget.cloudinary.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://support.cloudinary.com"
        },
        {
          "type": "website",
          "target": "wiki.cloudinary.com"
        }
      ]
    }
  },
  {
    "name": "Cloudways",
    "url": "https://bugcrowd.com/cloudways",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "api.cloudways.com"
        },
        {
          "type": "api",
          "target": "developers.cloudways.com"
        },
        {
          "type": "website",
          "target": "https://support.cloudways.com/"
        },
        {
          "type": "website",
          "target": "https://www.cloudways.com/"
        },
        {
          "type": "website",
          "target": "platform.cloudways.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "The Coca-Cola Company Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/coca-cola",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.appletiser.com"
        },
        {
          "type": "website",
          "target": "*.barqs.com"
        },
        {
          "type": "website",
          "target": "*.blueskysoda.com"
        },
        {
          "type": "website",
          "target": "*.coca-cola-deutschland.de"
        },
        {
          "type": "website",
          "target": "*.coca-cola-france.fr"
        },
        {
          "type": "website",
          "target": "*.coca-cola-oesterreich.at"
        },
        {
          "type": "website",
          "target": "*.coca-cola.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.coca-cola.co.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.coca-cola.com"
        },
        {
          "type": "website",
          "target": "*.coca-cola.com.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.coca-colaarabia.com"
        },
        {
          "type": "website",
          "target": "*.coca-colacompany.com"
        },
        {
          "type": "website",
          "target": "*.coca-colaentuhogar.com"
        },
        {
          "type": "website",
          "target": "*.coca-colaitalia.it"
        },
        {
          "type": "website",
          "target": "*.coca-colamaroc.ma"
        },
        {
          "type": "website",
          "target": "*.coca-colaukraine.com"
        },
        {
          "type": "website",
          "target": "*.cocacola-kos.com"
        },
        {
          "type": "website",
          "target": "*.cocacolabelgium.be"
        },
        {
          "type": "website",
          "target": "*.cocacolaespana.es"
        },
        {
          "type": "website",
          "target": "*.cocacolanederland.nl"
        },
        {
          "type": "website",
          "target": "*.cocacolaportugal.pt"
        },
        {
          "type": "website",
          "target": "*.cocacolastore.fr"
        },
        {
          "type": "website",
          "target": "*.coke.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.cokestore.com"
        },
        {
          "type": "website",
          "target": "*.cokeurl.com"
        },
        {
          "type": "website",
          "target": "*.dasani.com"
        },
        {
          "type": "website",
          "target": "*.dietcoke.com"
        },
        {
          "type": "website",
          "target": "*.drinkaha.com"
        },
        {
          "type": "website",
          "target": "*.drinkmoxie.com"
        },
        {
          "type": "website",
          "target": "*.fanta.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.fresca.com"
        },
        {
          "type": "website",
          "target": "*.fuzebev.com"
        },
        {
          "type": "website",
          "target": "*.hansens.com"
        },
        {
          "type": "website",
          "target": "*.hi-c.com"
        },
        {
          "type": "website",
          "target": "*.honesttea.com"
        },
        {
          "type": "website",
          "target": "*.innocentdrinks.[any ccTLD]"
        },
        {
          "type": "website",
          "target": "*.ko.com"
        },
        {
          "type": "website",
          "target": "*.melloyello.com"
        },
        {
          "type": "website",
          "target": "*.pibb-xtra.com"
        },
        {
          "type": "website",
          "target": "*.powerade.com"
        },
        {
          "type": "website",
          "target": "*.sprite.com"
        },
        {
          "type": "website",
          "target": "*.surge.com"
        },
        {
          "type": "website",
          "target": "*.testko.com"
        },
        {
          "type": "website",
          "target": "*.topochico.com"
        },
        {
          "type": "website",
          "target": "*.vebatcoke.com"
        },
        {
          "type": "website",
          "target": "*.vitaminwater.com"
        },
        {
          "type": "android",
          "target": "Coca-Cola Android App"
        },
        {
          "type": "ios",
          "target": "Coca-Cola iOS App"
        },
        {
          "type": "api",
          "target": "tccc-aem.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "iot",
          "target": "Coca-Cola Freestyle Machines"
        },
        {
          "type": "iot",
          "target": "Connected Coolers"
        },
        {
          "type": "iot",
          "target": "Dasani Purefill Water Dispensers"
        },
        {
          "type": "iot",
          "target": "Intelligent Vending Machines"
        }
      ]
    }
  },
  {
    "name": "codefortynine",
    "url": "https://bugcrowd.com/codefortynine",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1215055/slack-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1218211/secure-google-calendar-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1218652/deep-clone-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219288/comment-history-log-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219476/comment-custom-fields-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219514/merge-agent-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219807/version-sync-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219994/external-data-for-jira-fields?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1220136/quick-filters-for-jira-dashboards?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1220964/snipe-it-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1221733/external-data-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1222206/jamf-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1222978/dynamic-fields-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1223455/advanced-bulk-edit-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1226627/prime-custom-fields-for-jira?hosting=cloud"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Code.org",
    "url": "https://bugcrowd.com/codeorg",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "adhoc-bugcrowd-studio.cdn-code.org"
        },
        {
          "type": "website",
          "target": "adhoc-bugcrowd.cdn-code.org"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "advocacy.code.org"
        },
        {
          "type": "website",
          "target": "hourofcode.com"
        }
      ]
    }
  },
  {
    "name": "CoinDCX Managed Bug Bounty",
    "url": "https://bugcrowd.com/coindcx-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "ios",
          "target": "CoinDCX Pro:Crypto Trading App"
        },
        {
          "type": "android",
          "target": "CoinDCX: Bitcoin & Crypto Investment app"
        },
        {
          "type": "ios",
          "target": "CoinDCX: Crypto Investment"
        },
        {
          "type": "android",
          "target": "Trading App For Advanced Traders: CoinDCX Pro"
        },
        {
          "type": "api",
          "target": "api.coindcx.com"
        },
        {
          "type": "website",
          "target": "https://*.coindcx.com"
        },
        {
          "type": "website",
          "target": "https://*.dcxstage.com"
        },
        {
          "type": "website",
          "target": "https://blog.coindcx.com"
        },
        {
          "type": "website",
          "target": "https://coindcx.com/ - Main Webapp"
        },
        {
          "type": "website",
          "target": "https://dcxlearn.com/ - Crypto Investment Guide"
        },
        {
          "type": "website",
          "target": "https://futureyahihai.com"
        },
        {
          "type": "website",
          "target": "https://info.coindcx.com"
        },
        {
          "type": "website",
          "target": "https://otcdesk.coindcx.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Comcast Xfinity Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/comcastvdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.comcast.com"
        },
        {
          "type": "website",
          "target": "*.sys.comcast.net"
        },
        {
          "type": "website",
          "target": "*.xfinity.com\t"
        },
        {
          "type": "hardware",
          "target": "Flex - Xfinity hardware and services"
        },
        {
          "type": "hardware",
          "target": "Internet - All devices, including Broadband Gateways"
        },
        {
          "type": "other",
          "target": "Mobile Apps\tiOS and Android"
        },
        {
          "type": "hardware",
          "target": "TV - Xfinity hardware and services"
        },
        {
          "type": "hardware",
          "target": "Voice - Hardware and service"
        },
        {
          "type": "other",
          "target": "Xfinity Home"
        },
        {
          "type": "website",
          "target": "https://business.comcast.com/account"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SAP Concur",
    "url": "https://bugcrowd.com/concur",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "All services officially provided by Concur are in scope and eligible for the responsible disclosure program, including mobile applications."
        },
        {
          "type": "android",
          "target": "Tripit Mobile Application: Android (https://play.google.com/store/apps/details?id=com.tripit)"
        },
        {
          "type": "ios",
          "target": "Tripit Mobile Application: iOS (https://apps.apple.com/us/app/tripit-travel-planner/id311035142)"
        },
        {
          "type": "api",
          "target": "Tripit Mobile Web Services/Public web services used by the Tripit Mobile applications: https://api.tripit.com/ "
        },
        {
          "type": "website",
          "target": "Tripit Teams: https://www.tripit.com/teams/"
        },
        {
          "type": "website",
          "target": "Tripit Web Application: https://www.tripit.com"
        },
        {
          "type": "website",
          "target": "https://m.tripit.com/  "
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "All Hipmunk assets are out of scope as this product line has been discontinued."
        },
        {
          "type": "other",
          "target": "Sites and companies not owned by, maintained by, or under the control of Concur"
        },
        {
          "type": "website",
          "target": "concurmobile.freshdesk.com"
        },
        {
          "type": "website",
          "target": "forum.developer.concur.com"
        },
        {
          "type": "website",
          "target": "help.expenseit.com"
        },
        {
          "type": "website",
          "target": "http://store.hipmunk.com"
        },
        {
          "type": "website",
          "target": "media.hipmunk.com"
        },
        {
          "type": "website",
          "target": "sentry.hipmunk.com"
        },
        {
          "type": "website",
          "target": "tmcservices.co.in"
        },
        {
          "type": "website",
          "target": "www.concurinc.com"
        },
        {
          "type": "website",
          "target": "www.tmcservices.net"
        }
      ]
    }
  },
  {
    "name": "Constant Contact, Inc.",
    "url": "https://bugcrowd.com/constantcontact",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "All API SDKs"
        },
        {
          "type": "api",
          "target": "All Constant Contact APIs - api.constantcontact.com"
        },
        {
          "type": "website",
          "target": "All Constant Contact websites - *.constantcontact.com"
        },
        {
          "type": "website",
          "target": "Constant Contact mobile applications [iOS and Android]"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any asset not explicitly listed as 'In Scope' above is explicitly out of scope"
        }
      ]
    }
  },
  {
    "name": "Contrast Security",
    "url": "https://bugcrowd.com/contrast-security",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Contrast Developer Microsite"
        },
        {
          "type": "website",
          "target": "Contrast Official Facebook Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Instagram Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Linkedin Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Twitter Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Twitter EMEA Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Twitter Help Account"
        },
        {
          "type": "website",
          "target": "Contrast Official Youtube Account"
        },
        {
          "type": "website",
          "target": "Dedicated test instance per researcher"
        },
        {
          "type": "website",
          "target": "www.contrastsecurity.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.contrast.ninja"
        },
        {
          "type": "website",
          "target": "Any Contrast Corporate Asset"
        },
        {
          "type": "website",
          "target": "runner.contrastsecurity.com"
        }
      ]
    }
  },
  {
    "name": "CoolBitX",
    "url": "https://bugcrowd.com/coolbitx-mbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "iot",
          "target": "CoolWallet Pro"
        },
        {
          "type": "android",
          "target": "CoolWallet Pro App"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Craft Coders Marketplace Bug Bounty",
    "url": "https://bugcrowd.com/craftcoders",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1223249/mailto-wiki-email-for-confluence?hosting=datacenter&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1223249/mailto-wiki-send-emails-to-confluence?hosting=cloud&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1223249/mailto-wiki-send-emails-to-confluence?tab=overview&hosting=server"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Credit Karma",
    "url": "https://bugcrowd.com/creditkarma",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Credit Karma Android Mobile Application"
        },
        {
          "type": "ios",
          "target": "Credit Karma Canada iOS App"
        },
        {
          "type": "ios",
          "target": "Credit Karma iOS Mobile Application"
        },
        {
          "type": "api",
          "target": "api.creditkarma.com"
        },
        {
          "type": "website",
          "target": "https://*.creditkarma.com"
        },
        {
          "type": "website",
          "target": "https://accounts.creditkarma.com"
        },
        {
          "type": "website",
          "target": "https://blog.creditkarma.com/"
        },
        {
          "type": "website",
          "target": "https://help.creditkarma.com/"
        },
        {
          "type": "website",
          "target": "https://tax.creditkarma.com"
        },
        {
          "type": "website",
          "target": "https://www.creditkarma.ca/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "appsflyer.com"
        },
        {
          "type": "website",
          "target": "crashlytics.com"
        },
        {
          "type": "website",
          "target": "http://socialverification.creditkarma.com/"
        },
        {
          "type": "website",
          "target": "http://socialverification.stage.creditkarma.com/"
        },
        {
          "type": "website",
          "target": "https://taxhelp.creditkarma.com"
        },
        {
          "type": "website",
          "target": "https://www.creditkarma.com/all/advice"
        },
        {
          "type": "website",
          "target": "https://www.creditkarma.com/article/*"
        },
        {
          "type": "website",
          "target": "https://www.creditkarma.com/reviews/"
        },
        {
          "type": "website",
          "target": "taplytics.com"
        },
        {
          "type": "website",
          "target": "tax.creditkarma.com"
        },
        {
          "type": "website",
          "target": "taxsupport.creditkarma.com"
        }
      ]
    }
  },
  {
    "name": "Court Services and Offender Supervision Agency: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/csosa-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.csosa.gov"
        },
        {
          "type": "website",
          "target": "https://www.csosa.gov/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "CyberGhost",
    "url": "https://bugcrowd.com/cyberghost",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.cyberghost.com"
        },
        {
          "type": "api",
          "target": "CyberGhost APIs"
        },
        {
          "type": "android",
          "target": "CyberGhost Android application"
        },
        {
          "type": "other",
          "target": "CyberGhost Chrome extension"
        },
        {
          "type": "other",
          "target": "CyberGhost Firefox extension"
        },
        {
          "type": "other",
          "target": "CyberGhost Linux application"
        },
        {
          "type": "other",
          "target": "CyberGhost PS3+PS4 apps"
        },
        {
          "type": "other",
          "target": "CyberGhost VPN servers"
        },
        {
          "type": "other",
          "target": "CyberGhost Windows application"
        },
        {
          "type": "other",
          "target": "CyberGhost Xbox One + Xbox360 apps"
        },
        {
          "type": "ios",
          "target": "CyberGhost iOS application"
        },
        {
          "type": "other",
          "target": "CyberGhost macOS application"
        },
        {
          "type": "website",
          "target": "cyberghost.app"
        },
        {
          "type": "website",
          "target": "cyberghost.com"
        },
        {
          "type": "website",
          "target": "cyberghostvpn.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Dell Technologies Application Bug Bounty",
    "url": "https://bugcrowd.com/dell-com",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.dell.com/*"
        },
        {
          "type": "website",
          "target": "*.delltechnologies.com/* "
        },
        {
          "type": "other",
          "target": "Any Verified Dell-Controlled Endpoint (domains/IP space/etc.)\t"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/administration"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/billing"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/invoice"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "console-test.dell.com"
        },
        {
          "type": "website",
          "target": "console.dell.com"
        },
        {
          "type": "website",
          "target": "educate.dell.com"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/ "
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/catalog"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/subscriptions"
        },
        {
          "type": "website",
          "target": "https://console.delltechnologies.com/nav/support"
        },
        {
          "type": "website",
          "target": "prm-ps3dmz.dell.com"
        },
        {
          "type": "website",
          "target": "prm.dell.com"
        },
        {
          "type": "website",
          "target": "prmdev.dell.com"
        },
        {
          "type": "website",
          "target": "prmstg.dell.com"
        }
      ]
    }
  },
  {
    "name": "Dell Technologies' Products Bug Bounty Program",
    "url": "https://bugcrowd.com/dell-product",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Actively Supported, Bounty Eligible Dell Products"
        },
        {
          "type": "hardware",
          "target": "Actively Supported, Non-Reward Eligible Dell Products"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.dell.com/*"
        },
        {
          "type": "website",
          "target": "*.delltechnologies.com/*"
        }
      ]
    }
  },
  {
    "name": "Deutsche Bank Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/deutschebank-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Any Deutsche Bank Asset"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Trackit DB"
        }
      ]
    }
  },
  {
    "name": "Dfinity Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/dfinity-vdppro",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Core Internet Computer Protocol stack"
        },
        {
          "type": "other",
          "target": "Internet Computer Infrastructure"
        },
        {
          "type": "other",
          "target": "Internet Identity: Internet Computer Authentication System"
        },
        {
          "type": "other",
          "target": "Network Nervous System Frontend Dapp"
        },
        {
          "type": "other",
          "target": "Network Nervous System canisters"
        },
        {
          "type": "other",
          "target": "SDK, CDK, Candid & Motoko smart contract language"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Department of Homeland Security: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/dhs-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.dhs.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "DICK'S Sporting Goods",
    "url": "https://bugcrowd.com/dickssportinggoods",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.calia.com"
        },
        {
          "type": "website",
          "target": "*.dcsg.com"
        },
        {
          "type": "website",
          "target": "*.dickssportinggoods.com"
        },
        {
          "type": "website",
          "target": "*.fieldandstreamshop.com"
        },
        {
          "type": "website",
          "target": "*.goinggoinggone.com"
        },
        {
          "type": "website",
          "target": "*.golfgalaxy.com"
        },
        {
          "type": "website",
          "target": "*.publiclands.com"
        },
        {
          "type": "website",
          "target": "*.vrst.com"
        },
        {
          "type": "android",
          "target": "Android App:  Dicks Sporting Goods"
        },
        {
          "type": "ios",
          "target": "iOS App:  Dicks Sporting Goods"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Digistorm",
    "url": "https://bugcrowd.com/digistorm",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "http://app.sandbox.digistorm.com"
        },
        {
          "type": "website",
          "target": "https://app.pentest.digistorm.com"
        },
        {
          "type": "api",
          "target": "https://app.pentest.digistorm.com/graphql"
        },
        {
          "type": "api",
          "target": "https://app.sandbox.digistorm.com/"
        },
        {
          "type": "api",
          "target": "https://app.sandbox.digistorm.com/graphql"
        },
        {
          "type": "website",
          "target": "https://{account-code}-0.app.pentest.digistorm.com/admin"
        },
        {
          "type": "website",
          "target": "https://{account-code}-0.app.pentest.digistorm.com/forms/enrol-form/start"
        },
        {
          "type": "website",
          "target": "https://{account-code}-0.app.pentest.digistorm.com/forms/group-tours"
        },
        {
          "type": "website",
          "target": "https://{account-code}-1.app.pentest.digistorm.com/admin"
        },
        {
          "type": "website",
          "target": "https://{account-code}-1.app.pentest.digistorm.com/forms/enrol-form/start"
        },
        {
          "type": "website",
          "target": "https://{account-code}-1.app.pentest.digistorm.com/forms/group-tours"
        },
        {
          "type": "website",
          "target": "https://{account-code}.app.sandbox.digistorm.com-1/forms/enrol-form"
        },
        {
          "type": "website",
          "target": "https://{account-code}.app.sandbox.digistorm.com-2/*"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "DMARC Records"
        },
        {
          "type": "other",
          "target": "Digistorm Funnel Alpha"
        },
        {
          "type": "other",
          "target": "Digistorm Funnel Production"
        },
        {
          "type": "other",
          "target": "Digistorm Funnel Staging"
        },
        {
          "type": "other",
          "target": "Digistorm Website"
        }
      ]
    }
  },
  {
    "name": "Digital Shadows VDP",
    "url": "https://bugcrowd.com/digitalshadows-vdpesf",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "digitalshadows.com"
        },
        {
          "type": "website",
          "target": "portal-digitalshadows.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Directly",
    "url": "https://bugcrowd.com/directly",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.sandbox.directly.com/"
        },
        {
          "type": "website",
          "target": "app.sandbox.directly.com"
        },
        {
          "type": "website",
          "target": "https://sandbox.directly.com/dashboard/index"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.sandbox.directly.com/schedule-a-demo/* OR /product/* OR /careers/* OR /about/* OR /legal/* OR /trust/*"
        },
        {
          "type": "website",
          "target": "resources.directly.com/*"
        },
        {
          "type": "website",
          "target": "www.directly.com"
        }
      ]
    }
  },
  {
    "name": "Docusign: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/docusign-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "All Docusign apps and assets not listed under the Out of Scope list "
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any Docusign Customer Tenant"
        },
        {
          "type": "website",
          "target": "http://www.rooms.docusign.com/*"
        },
        {
          "type": "website",
          "target": "https://account.docusign.com/"
        },
        {
          "type": "website",
          "target": "https://admin.docusign.com"
        },
        {
          "type": "website",
          "target": "https://app.docusign.com/"
        },
        {
          "type": "website",
          "target": "https://www.docusign.net/Signing/"
        },
        {
          "type": "api",
          "target": "https://www.docusign.net/api/3.0/*"
        },
        {
          "type": "api",
          "target": "https://www.docusign.net/restapi/*"
        }
      ]
    }
  },
  {
    "name": "Department of Interior: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/doi-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.doi.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Department of Labor",
    "url": "https://bugcrowd.com/dol-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://*.DOL-ESA.gov"
        },
        {
          "type": "website",
          "target": "https://*.DOLETA.gov"
        },
        {
          "type": "website",
          "target": "https://*.UI.gov"
        },
        {
          "type": "website",
          "target": "https://*.acinet.org"
        },
        {
          "type": "website",
          "target": "https://*.ajb.org"
        },
        {
          "type": "website",
          "target": "https://*.alx.org"
        },
        {
          "type": "website",
          "target": "https://*.apprenticeship.gov"
        },
        {
          "type": "website",
          "target": "https://*.apprenticeships.gov"
        },
        {
          "type": "website",
          "target": "https://*.askearn.org"
        },
        {
          "type": "website",
          "target": "https://*.askjan.org"
        },
        {
          "type": "website",
          "target": "https://*.backtojobcorps.com"
        },
        {
          "type": "website",
          "target": "https://*.benefits.gov"
        },
        {
          "type": "website",
          "target": "https://*.bls.gov"
        },
        {
          "type": "website",
          "target": "https://*.bonds4jobs.com"
        },
        {
          "type": "website",
          "target": "https://*.capeyouth.org"
        },
        {
          "type": "website",
          "target": "https://*.careerinfonet.org"
        },
        {
          "type": "website",
          "target": "https://*.careeronestop.org"
        },
        {
          "type": "website",
          "target": "https://*.disability.gov"
        },
        {
          "type": "website",
          "target": "https://*.dol.gov"
        },
        {
          "type": "website",
          "target": "https://*.employer.gov"
        },
        {
          "type": "website",
          "target": "https://*.epolicyworks.org"
        },
        {
          "type": "website",
          "target": "https://*.euusosh.org"
        },
        {
          "type": "website",
          "target": "https://*.goodjobs.gov"
        },
        {
          "type": "website",
          "target": "https://*.govloans.gov"
        },
        {
          "type": "website",
          "target": "https://*.hirevets.gov"
        },
        {
          "type": "website",
          "target": "https://*.inclusiveapprenticeship.org"
        },
        {
          "type": "website",
          "target": "https://*.jcmarketplace.com"
        },
        {
          "type": "website",
          "target": "https://*.jcstudentsurveys.com"
        },
        {
          "type": "website",
          "target": "https://*.jcsuccess.org"
        },
        {
          "type": "website",
          "target": "https://*.jctalentworks.com"
        },
        {
          "type": "website",
          "target": "https://*.jobcorps.gov"
        },
        {
          "type": "website",
          "target": "https://*.jobcorps.org"
        },
        {
          "type": "website",
          "target": "https://*.joinjobcorps.com"
        },
        {
          "type": "website",
          "target": "https://*.labor.gov"
        },
        {
          "type": "website",
          "target": "https://*.leadcenter.org"
        },
        {
          "type": "website",
          "target": "https://*.miproximopaso.org "
        },
        {
          "type": "website",
          "target": "https://*.msha.gov"
        },
        {
          "type": "website",
          "target": "https://*.mynextmove.org "
        },
        {
          "type": "website",
          "target": "https://*.myskillsmyfuture.org"
        },
        {
          "type": "website",
          "target": "https://*.neapmap.com"
        },
        {
          "type": "website",
          "target": "https://*.onetcenter.org"
        },
        {
          "type": "website",
          "target": "https://*.onetcodeconnector.org"
        },
        {
          "type": "website",
          "target": "https://*.onetonline.org"
        },
        {
          "type": "website",
          "target": "https://*.osha.gov"
        },
        {
          "type": "website",
          "target": "https://*.peatworks.org"
        },
        {
          "type": "website",
          "target": "https://*.persuader-reports.gov"
        },
        {
          "type": "website",
          "target": "https://*.servicelocator.org"
        },
        {
          "type": "website",
          "target": "https://*.trainingproviderresults.gov"
        },
        {
          "type": "website",
          "target": "https://*.unemployment.gov"
        },
        {
          "type": "website",
          "target": "https://*.unionreports.gov"
        },
        {
          "type": "website",
          "target": "https://*.useuosh.org"
        },
        {
          "type": "website",
          "target": "https://*.ustedquepuedehacer.org"
        },
        {
          "type": "website",
          "target": "https://*.veterans.gov"
        },
        {
          "type": "website",
          "target": "https://*.whatcanyoudocampaign.org"
        },
        {
          "type": "website",
          "target": "https://*.whistleblowers.gov"
        },
        {
          "type": "website",
          "target": "https://*.worker.gov"
        },
        {
          "type": "website",
          "target": "https://*.workforcegps.org"
        },
        {
          "type": "website",
          "target": "https://*.wrp.gov"
        },
        {
          "type": "website",
          "target": "https://*.youthrules.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Dropbox",
    "url": "https://bugcrowd.com/dropbox",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.docsend.com"
        },
        {
          "type": "website",
          "target": "*.dropbox.com    "
        },
        {
          "type": "website",
          "target": "*.dropboxforum.com"
        },
        {
          "type": "website",
          "target": "*.hellofax.com"
        },
        {
          "type": "website",
          "target": "*.hellosign.com"
        },
        {
          "type": "website",
          "target": "*.helloworks.com"
        },
        {
          "type": "android",
          "target": "Dropbox Android App"
        },
        {
          "type": "other",
          "target": "Dropbox Capture Windows Desktop App "
        },
        {
          "type": "other",
          "target": "Dropbox Capture macOS Desktop App"
        },
        {
          "type": "other",
          "target": "Dropbox Desktop Application"
        },
        {
          "type": "ios",
          "target": "Dropbox EMM iOS"
        },
        {
          "type": "android",
          "target": "Dropbox Paper Android App"
        },
        {
          "type": "ios",
          "target": "Dropbox Paper iOS app"
        },
        {
          "type": "android",
          "target": "Dropbox Sign (formerly HelloSign) Android App"
        },
        {
          "type": "ios",
          "target": "Dropbox iOS app"
        },
        {
          "type": "other",
          "target": "Paper Desktop Application"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "eazyBI",
    "url": "https://bugcrowd.com/eazybi",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "docs.eazybi.com"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1211051/eazybi-reports-and-charts-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1211051/eazybi-reports-and-charts-for-jira?hosting=datacenter"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1211051/eazybi-reports-and-charts-for-jira?hosting=server"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1219504/eazybi-reports-and-charts-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219504/eazybi-reports-and-charts-for-confluence?hosting=datacenter"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219504/eazybi-reports-and-charts-for-confluence?hosting=server"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Equal Employment Opportunity Commission: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/eeoc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "alertus.eeoc.gov"
        },
        {
          "type": "website",
          "target": "arcdev.eeoc.gov"
        },
        {
          "type": "website",
          "target": "arctrain.eeoc.gov"
        },
        {
          "type": "website",
          "target": "arcuat.eeoc.gov"
        },
        {
          "type": "website",
          "target": "eeoc.gov"
        },
        {
          "type": "website",
          "target": "https://arc.eeoc.gov"
        },
        {
          "type": "website",
          "target": "ims.eeoc.gov"
        },
        {
          "type": "website",
          "target": "nxg.eeoc.gov"
        },
        {
          "type": "website",
          "target": "sts.eeoc.gov"
        },
        {
          "type": "website",
          "target": "surveys.eeoc.gov"
        },
        {
          "type": "website",
          "target": "uat-www.eeoc.gov"
        },
        {
          "type": "website",
          "target": "youth.eeoc.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "eero",
    "url": "https://bugcrowd.com/eero",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "eero APIs"
        },
        {
          "type": "android",
          "target": "eero Android Mobile Application"
        },
        {
          "type": "hardware",
          "target": "eero Node"
        },
        {
          "type": "ios",
          "target": "eero iOS Mobile Application"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "http://foo.eero.com/"
        }
      ]
    }
  },
  {
    "name": "Electroneum",
    "url": "https://bugcrowd.com/electroneum",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 12000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Electroneum Android App"
        },
        {
          "type": "ios",
          "target": "Electroneum iOS App"
        },
        {
          "type": "website",
          "target": "https://anytask.thesecurityteam.rocks/"
        },
        {
          "type": "api",
          "target": "https://api.anytask.com/"
        },
        {
          "type": "api",
          "target": "https://api.electroneum.com/"
        },
        {
          "type": "website",
          "target": "https://electroneum.com/"
        },
        {
          "type": "website",
          "target": "https://my.electroneum.com/"
        },
        {
          "type": "website",
          "target": "https://my.thesecurityteam.rocks/"
        },
        {
          "type": "website",
          "target": "https://www.anytask.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Elementor: Bug Bounty Program",
    "url": "https://bugcrowd.com/elementor",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " app.strattic.com"
        },
        {
          "type": "website",
          "target": "https://code.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://developers.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://elementor.com/*"
        },
        {
          "type": "website",
          "target": "https://go.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://he.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://library.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://my.elementor.com/"
        },
        {
          "type": "website",
          "target": "https://translate.elementor.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "US Environmental Protection Agency Vulnerability Disclosure",
    "url": "https://bugcrowd.com/epa-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.FEDCENTER.GOV"
        },
        {
          "type": "website",
          "target": "*.FRTR.GOV"
        },
        {
          "type": "website",
          "target": "*.GLNPO.GOV"
        },
        {
          "type": "website",
          "target": "*.SUSTAINABILITY.GOV"
        },
        {
          "type": "website",
          "target": "*.URBANWATERS.GOV"
        },
        {
          "type": "website",
          "target": "*.airknowledge.gov"
        },
        {
          "type": "website",
          "target": "*.airnow.gov"
        },
        {
          "type": "website",
          "target": "*.e-enterprise.gov"
        },
        {
          "type": "website",
          "target": "*.energystar.gov"
        },
        {
          "type": "website",
          "target": "*.epa.gov"
        },
        {
          "type": "website",
          "target": "*.foiaonline.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Etsy",
    "url": "https://bugcrowd.com/etsy",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Any publicly facing host owned by Etsy, including the below:"
        },
        {
          "type": "api",
          "target": "Etsy API (see documentation below)"
        },
        {
          "type": "android",
          "target": "Etsy Mobile Application (Android)"
        },
        {
          "type": "ios",
          "target": "Etsy Mobile Application (iPhone)"
        },
        {
          "type": "website",
          "target": "blog.etsy.com"
        },
        {
          "type": "website",
          "target": "community.etsy.com"
        },
        {
          "type": "other",
          "target": "etsypayments.com"
        },
        {
          "type": "website",
          "target": "help.etsy.com"
        },
        {
          "type": "website",
          "target": "www.etsy.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "api",
          "target": "icht.etsysecure.com"
        }
      ]
    }
  },
  {
    "name": "EXIM - Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/exim-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.exim.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "ExpressVPN",
    "url": "https://bugcrowd.com/expressvpn",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.expressvpn.com"
        },
        {
          "type": "other",
          "target": "*.xvservice.net"
        },
        {
          "type": "other",
          "target": "*.xvtest.net"
        },
        {
          "type": "other",
          "target": "Apple App Store (886492891)"
        },
        {
          "type": "api",
          "target": "ExpressVPN APIs"
        },
        {
          "type": "android",
          "target": "ExpressVPN Android application"
        },
        {
          "type": "other",
          "target": "ExpressVPN Chrome extension"
        },
        {
          "type": "other",
          "target": "ExpressVPN Firefox extension"
        },
        {
          "type": "other",
          "target": "ExpressVPN Keys Browser Extension"
        },
        {
          "type": "other",
          "target": "ExpressVPN Linux application"
        },
        {
          "type": "other",
          "target": "ExpressVPN Router"
        },
        {
          "type": "other",
          "target": "ExpressVPN Windows application"
        },
        {
          "type": "ios",
          "target": "ExpressVPN iOS application"
        },
        {
          "type": "other",
          "target": "ExpressVPN macOS application"
        },
        {
          "type": "other",
          "target": "Google Play (com.expressvpn.vpn)"
        },
        {
          "type": "other",
          "target": "Lightway Core"
        },
        {
          "type": "other",
          "target": "MediaStreamer DNS servers"
        },
        {
          "type": "other",
          "target": "VPN servers"
        },
        {
          "type": "website",
          "target": "expressobutiolem.onion"
        },
        {
          "type": "website",
          "target": "www.expressvpn.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Federal Communications Commission: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/fcc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.exploretsp.gov"
        },
        {
          "type": "website",
          "target": "*.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://apps2.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://apps2demo.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://apps3.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionapplicationdemo.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionbidding.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionbidding2.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctiondata.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionfiling.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionsignon.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://auctionsignon2.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://autodiscover.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://consumercomplaints.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://data.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://dcvdi.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://ecfsapi-prototype.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://ecfsapi.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://enterpriseefiling.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://esupport.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://fccdata.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://fccravpn.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://fjallfoss.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://gbvdi.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://opendata.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://osts.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://p2p-mic-sasentry.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://paydemo.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://www.fcc.gov/*"
        },
        {
          "type": "website",
          "target": "https://www3.fcc.gov"
        },
        {
          "type": "website",
          "target": "https://xmail.fcc.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "FIS",
    "url": "https://bugcrowd.com/fis",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 100000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Any FIS asset is in scope"
        },
        {
          "type": "website",
          "target": "fisglobal.gpcloudservice.com"
        },
        {
          "type": "website",
          "target": "login6.fisglobal.com/idp/elogin"
        },
        {
          "type": "website",
          "target": "portal.efdservices.com/efgportal/Portal/login"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any site related to Sedgwick"
        },
        {
          "type": "website",
          "target": "Any site relating to Sungard Availability Services"
        }
      ]
    }
  },
  {
    "name": "Flourish",
    "url": "https://bugcrowd.com/flourish",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.flourish.studio"
        },
        {
          "type": "website",
          "target": "*.xyzbmojn.net"
        },
        {
          "type": "website",
          "target": "flo.uri.sh"
        },
        {
          "type": "website",
          "target": "flourish-user-preview.com"
        },
        {
          "type": "website",
          "target": "flourish-user-templates.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "FoxyCart",
    "url": "https://bugcrowd.com/foxycart",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 600,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*-bugcrowd.foxycart.com (read below for details)"
        },
        {
          "type": "other",
          "target": "api.foxycart.com"
        },
        {
          "type": "other",
          "target": "https://admin.foxycart.com"
        },
        {
          "type": "other",
          "target": "https://foxycart-demo.foxycart.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SecureDrop",
    "url": "https://bugcrowd.com/freedomofpress",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-client"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-debian-packaging"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-export"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-log"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-proxy"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-sdk"
        },
        {
          "type": "other",
          "target": "https://github.com/freedomofpress/securedrop-workstation"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Federal Retirement Thrift Investment Board : Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/frtib-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.exploretsp.gov"
        },
        {
          "type": "website",
          "target": "*.frtib.gov"
        },
        {
          "type": "website",
          "target": "*.tsp.gov"
        },
        {
          "type": "other",
          "target": "74.113.204.0/22"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Federal Trade Commission: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/ftc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://*.alertaenlinea.gov"
        },
        {
          "type": "website",
          "target": "https://*.consumer.gov"
        },
        {
          "type": "website",
          "target": "https://*.consumersentinel.gov"
        },
        {
          "type": "website",
          "target": "https://*.donotcall.gov"
        },
        {
          "type": "website",
          "target": "https://*.dontserveteens.gov"
        },
        {
          "type": "website",
          "target": "https://*.econsumer.gov"
        },
        {
          "type": "website",
          "target": "https://*.ftc.gov"
        },
        {
          "type": "website",
          "target": "https://*.hsr.gov"
        },
        {
          "type": "website",
          "target": "https://*.identitytheft.gov"
        },
        {
          "type": "website",
          "target": "https://*.idtheft.gov"
        },
        {
          "type": "website",
          "target": "https://*.militaryconsumer.gov"
        },
        {
          "type": "website",
          "target": "https://*.onguardonline.gov"
        },
        {
          "type": "website",
          "target": "https://*.protecciondelconsumidor.gov"
        },
        {
          "type": "website",
          "target": "https://*.robodeidentidad.gov"
        },
        {
          "type": "website",
          "target": "https://*.sentinel.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "U.S. Fish and Wildlife Service",
    "url": "https://bugcrowd.com/fws-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.fws.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Gearset: Managed Bug Bounty",
    "url": "https://bugcrowd.com/gearset-mbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "staging-api.gearset.com"
        },
        {
          "type": "website",
          "target": "staging.gearset.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "api",
          "target": "api.gearset.com"
        }
      ]
    }
  },
  {
    "name": "Geotab: VDP",
    "url": "https://bugcrowd.com/geotab-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bsmtechnologies.com"
        },
        {
          "type": "website",
          "target": "*.bsmwireless.com"
        },
        {
          "type": "website",
          "target": "*.geotab.ca"
        },
        {
          "type": "website",
          "target": "*.geotab.com (some exceptions for out of scope)"
        },
        {
          "type": "website",
          "target": "*.geotabinc.com"
        },
        {
          "type": "website",
          "target": "*.intendia.com"
        },
        {
          "type": "website",
          "target": "*.lat-lon.com"
        },
        {
          "type": "website",
          "target": "*.mobicorp.com"
        },
        {
          "type": "website",
          "target": "*.neutralvehicle.com"
        },
        {
          "type": "website",
          "target": "*.smartchargerewards.com (Note: exceptions below)"
        },
        {
          "type": "website",
          "target": "*.webtechwireless.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.geotabgov.us"
        },
        {
          "type": "website",
          "target": "*.sentinelfm.com"
        },
        {
          "type": "website",
          "target": "careers.geotab.com"
        },
        {
          "type": "website",
          "target": "consumersenergy.smartchargerewards.com"
        },
        {
          "type": "website",
          "target": "gofleet*.geotab.com"
        },
        {
          "type": "website",
          "target": "gov*.geotab.com"
        },
        {
          "type": "website",
          "target": "its.geotab.com/contact"
        },
        {
          "type": "website",
          "target": "its.geotab.com/demo"
        },
        {
          "type": "website",
          "target": "its.geotab.com/partners"
        },
        {
          "type": "website",
          "target": "my*.geotab.com"
        },
        {
          "type": "website",
          "target": "myadmin.geotab.com"
        },
        {
          "type": "website",
          "target": "mypreview*.geotab.com"
        },
        {
          "type": "website",
          "target": "ne-hmlp.smartchargerewards.com"
        },
        {
          "type": "website",
          "target": "ne-wed.smartchargerewards.com"
        },
        {
          "type": "website",
          "target": "saskatchewan.smartchargerewards.ca"
        },
        {
          "type": "website",
          "target": "smartchargenewbrunswick.smartchargerewards.com"
        },
        {
          "type": "website",
          "target": "smartchargenewyork.smartchargerewards.com"
        }
      ]
    }
  },
  {
    "name": "GoPro Awards Webapp Public Program",
    "url": "https://bugcrowd.com/gopro-og-public",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "GoPro Awards"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "Everything Else"
        }
      ]
    }
  },
  {
    "name": "Gorillas",
    "url": "https://bugcrowd.com/gorillas-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Any Gorillas asset on the Internet"
        },
        {
          "type": "android",
          "target": "Gorillas Android Application"
        },
        {
          "type": "ios",
          "target": "Gorillas iOS Application"
        },
        {
          "type": "website",
          "target": "Gorillas.io"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Gusto VDP",
    "url": "https://bugcrowd.com/gusto-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Android App:  Gusto Wallet"
        },
        {
          "type": "api",
          "target": "api.gusto-demo.com"
        },
        {
          "type": "website",
          "target": "app.gusto-demo.com"
        },
        {
          "type": "website",
          "target": "https://dev.gusto.com/"
        },
        {
          "type": "website",
          "target": "https://github.com/Gusto/apollo-federation-ruby"
        },
        {
          "type": "website",
          "target": "https://github.com/Gusto/grpc-web-ruby"
        },
        {
          "type": "ios",
          "target": "iOS App:  Gusto Wallet"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Hack Me!",
    "url": "https://bugcrowd.com/hackme",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "All IT-Managed Third-Party Services and Infrastructure"
        },
        {
          "type": "api",
          "target": "api.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "email.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "www.bugcrowd.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "api",
          "target": "Crowdcontrol"
        },
        {
          "type": "website",
          "target": "docs.bugcrowd.com"
        },
        {
          "type": "website",
          "target": "researcherdocs.bugcrowd.com"
        }
      ]
    }
  },
  {
    "name": "Halp",
    "url": "https://bugcrowd.com/halp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Atlassian Assist - Cloud - https://marketplace.atlassian.com/apps/1220442/atlassian-assist?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Atlassian Assist - DataCenter - https://marketplace.atlassian.com/apps/1220442/atlassian-assist?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "Atlassian Assist- Server - https://marketplace.atlassian.com/apps/1220442/atlassian-assist?hosting=server"
        },
        {
          "type": "other",
          "target": "Confluence Slack Automation Integration by Halp - Cloud - https://marketplace.atlassian.com/apps/1222365/confluence-slack-automation-integration-by-halp?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Halp Answers for Confluence in Slack - Cloud - https://marketplace.atlassian.com/apps/1222365/halp-answers-for-confluence-in-slack?hosting=cloud"
        },
        {
          "type": "other",
          "target": "Halp application for Microsoft Teams"
        },
        {
          "type": "other",
          "target": "Halp application for Slack"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "HealthifyMe's Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/healthifyme",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.healthifyme.com"
        },
        {
          "type": "website",
          "target": "Any publicly facing asset owned by HealthifyMe (ip space, domains, etc)"
        },
        {
          "type": "ios",
          "target": "https://itunes.apple.com/in/app/healthifyme-weight-loss-coach/id943712366?mt=8"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.healthifyme.basic&hl=en"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "behtarkhao.healthifyme.com "
        }
      ]
    }
  },
  {
    "name": "HostGator",
    "url": "https://bugcrowd.com/hostgator",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.checkout.hostgator.com "
        },
        {
          "type": "website",
          "target": "www.hostgator.com"
        },
        {
          "type": "website",
          "target": "www.portal.hostgator.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.staff.hostgator.com"
        },
        {
          "type": "website",
          "target": "ebook.hostgator.com"
        },
        {
          "type": "website",
          "target": "vps*.hostgator.com"
        }
      ]
    }
  },
  {
    "name": "HostGator Brazil VDP",
    "url": "https://bugcrowd.com/hostgator-brazil-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Hostgator.com.br "
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "HostGator Latam Bug Bounty",
    "url": "https://bugcrowd.com/hostgator-latam-bb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Hostgator.com.br "
        },
        {
          "type": "website",
          "target": "cart.hostgator.com.br"
        },
        {
          "type": "website",
          "target": "cliente.hostgator.com.br/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope "
        }
      ]
    }
  },
  {
    "name": "HostGator VDP",
    "url": "https://bugcrowd.com/hostgator-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.hostgator.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.staff.hostgator.com"
        },
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope.\t"
        },
        {
          "type": "website",
          "target": "vps*.hosgator.com"
        }
      ]
    }
  },
  {
    "name": "HubSpot",
    "url": "https://bugcrowd.com/hubspot",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.hs-sites.com"
        },
        {
          "type": "other",
          "target": "*.hubapi.com"
        },
        {
          "type": "other",
          "target": "*.hubspot.com"
        },
        {
          "type": "other",
          "target": "*.hubspot.net"
        },
        {
          "type": "website",
          "target": "*.hubspotemail.net"
        },
        {
          "type": "android",
          "target": "HubSpot Mobile Application: Android"
        },
        {
          "type": "ios",
          "target": "HubSpot Mobile Application: iOS"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "*.getsidekick.com"
        },
        {
          "type": "other",
          "target": "*.inbound.org"
        },
        {
          "type": "website",
          "target": "blog.hubspot.com"
        },
        {
          "type": "website",
          "target": "ink1001.hubspot.com"
        },
        {
          "type": "website",
          "target": "integrate.hubspot.com"
        },
        {
          "type": "website",
          "target": "shop.hubspot.com"
        },
        {
          "type": "website",
          "target": "surveys.success.hubspot.com"
        },
        {
          "type": "website",
          "target": "ux.hubspot.com"
        }
      ]
    }
  },
  {
    "name": "Humble Bundle",
    "url": "https://bugcrowd.com/humblebundle",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://www.humblebundle.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Hummingbird VDP",
    "url": "https://bugcrowd.com/hummingbird-vdp-ess",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.hummingbird.co"
        },
        {
          "type": "website",
          "target": "app.hummingbird.co"
        },
        {
          "type": "website",
          "target": "hummingbird.co"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Ibotta",
    "url": "https://bugcrowd.com/ibotta",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": " https://api.ibops.net/ad-management"
        },
        {
          "type": "other",
          "target": "Chrome Extension"
        },
        {
          "type": "other",
          "target": "Ibotta App Data & Memory"
        },
        {
          "type": "website",
          "target": "Web v2"
        },
        {
          "type": "website",
          "target": "http://ibotta.com"
        },
        {
          "type": "ios",
          "target": "http://itunes.apple.com/us/app/ibotta/id559887125"
        },
        {
          "type": "android",
          "target": "http://market.android.com/details?id=com.ibotta.android"
        },
        {
          "type": "api",
          "target": "https://api.ibops.net"
        },
        {
          "type": "api",
          "target": "https://api.ibotta.com"
        },
        {
          "type": "api",
          "target": "https://api.int.ibops.net"
        },
        {
          "type": "api",
          "target": "https://api.int.ibops.net/customer-loyalty-service"
        },
        {
          "type": "website",
          "target": "https://backend.ibotta.com/"
        },
        {
          "type": "api",
          "target": "https://content-server.ibotta.com/graphql"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "http://sampling.ibotta.com/"
        },
        {
          "type": "api",
          "target": "https://backend.ibotta.com/duplicate_receipt_moderation"
        }
      ]
    }
  },
  {
    "name": "iFood: Bug Bounty Program",
    "url": "https://bugcrowd.com/ifood-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "https://api.fstr.rocks"
        },
        {
          "type": "website",
          "target": "https://marketplace.ifood.com.br"
        },
        {
          "type": "api",
          "target": "https://rc.fstr.rocks"
        },
        {
          "type": "website",
          "target": "https://shop.ifood.com.br"
        },
        {
          "type": "website",
          "target": "https://static-images.ifood.com.br"
        },
        {
          "type": "website",
          "target": "https://wslatam.ifood.com.br"
        },
        {
          "type": "website",
          "target": "https://wsloja.ifood.com.br"
        },
        {
          "type": "website",
          "target": "https://www.ifood.com.br"
        },
        {
          "type": "android",
          "target": "iFood Customer Android Application"
        },
        {
          "type": "ios",
          "target": "iFood Customer iOS Application"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "blog-empresas.ifood.com.br"
        },
        {
          "type": "website",
          "target": "blog-parceiros.ifood.com.br"
        }
      ]
    }
  },
  {
    "name": "Imperva Bug Bounty",
    "url": "https://bugcrowd.com/imperva-mbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://*.cloudvector.com/"
        },
        {
          "type": "website",
          "target": "https://*.imperva.com"
        },
        {
          "type": "api",
          "target": "https://*.incapsula.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Indeed",
    "url": "https://bugcrowd.com/indeed",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://*.indeed.com"
        },
        {
          "type": "website",
          "target": "https://*.indeed.tech"
        },
        {
          "type": "website",
          "target": "https://accounts.indeed.com"
        },
        {
          "type": "website",
          "target": "https://analytics.indeed.com"
        },
        {
          "type": "ios",
          "target": "https://apps.apple.com/us/app/indeed-job-search/id309735670"
        },
        {
          "type": "website",
          "target": "https://billing.indeed.com"
        },
        {
          "type": "website",
          "target": "https://central.indeed.com"
        },
        {
          "type": "other",
          "target": "https://chrome.google.com/webstore/detail/zapinfo/kiodpphbmnmcmnfgpnmkkhmkllnlflef"
        },
        {
          "type": "website",
          "target": "https://employer.simplyhired-staging.com"
        },
        {
          "type": "website",
          "target": "https://employers.indeed.com/"
        },
        {
          "type": "website",
          "target": "https://events.indeed.com"
        },
        {
          "type": "website",
          "target": "https://my.indeed.com"
        },
        {
          "type": "website",
          "target": "https://my.zapinfo.io"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch"
        },
        {
          "type": "website",
          "target": "https://resumes.indeed.com"
        },
        {
          "type": "website",
          "target": "https://secure.indeed.com"
        },
        {
          "type": "website",
          "target": "https://wowjobs.ca"
        },
        {
          "type": "website",
          "target": "https://www.indeed.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://hr.simplyhired-staging.com"
        }
      ]
    }
  },
  {
    "name": "Intercom",
    "url": "https://bugcrowd.com/intercom",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.intercomassets.com / *.intercomcdn.com"
        },
        {
          "type": "android",
          "target": "Android SDK"
        },
        {
          "type": "api",
          "target": "https://api.intercom.io"
        },
        {
          "type": "website",
          "target": "https://app.intercom.com"
        },
        {
          "type": "website",
          "target": "https://app.intercom.io"
        },
        {
          "type": "ios",
          "target": "iOS SDK"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "InVision",
    "url": "https://bugcrowd.com/invision",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": " bugcrowdninja.invisionapp.com"
        },
        {
          "type": "website",
          "target": " bugcrowdninja2.invisionapp.com"
        },
        {
          "type": "api",
          "target": "api.muz.li"
        },
        {
          "type": "website",
          "target": "bugcrowd-[your_bugcrowd_username].invisionapp.com"
        },
        {
          "type": "website",
          "target": "colors.muz.li/"
        },
        {
          "type": "website",
          "target": "https://projects.invisionapp.com"
        },
        {
          "type": "website",
          "target": "search.muz.li/"
        },
        {
          "type": "website",
          "target": "www.designbetter.co"
        },
        {
          "type": "website",
          "target": "www.invisionapp.com"
        },
        {
          "type": "website",
          "target": "www.muz.li"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "status.invisionapp.com"
        },
        {
          "type": "website",
          "target": "support.invisionapp.com"
        }
      ]
    }
  },
  {
    "name": "IOOF Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/ioof",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.insigniafinancial.com.au"
        },
        {
          "type": "website",
          "target": "www.ioof.com.au"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.insigniafinancial.com.au"
        },
        {
          "type": "website",
          "target": "*.ioof.com.au"
        }
      ]
    }
  },
  {
    "name": "iRobot",
    "url": "https://bugcrowd.com/irobot",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 7000,
    "targets": {
      "in_scope": [
        {
          "type": "ios",
          "target": "https://itunes.apple.com/us/app/irobot-home/id1012014442?mt=8"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.irobot.home"
        },
        {
          "type": "hardware",
          "target": "iRobot cloud-connected robot that you own (i.e. j7, s9, i7, 980, 960, 690, Braava, etc.)"
        }
      ],
      "out_of_scope": [
        {
          "type": "api",
          "target": " https://w2ab2i60y4.execute-api.us-east-1.amazonaws.com/dev/v1/ecommerce/entitlements"
        },
        {
          "type": "website",
          "target": "https://global.irobot.com/My%20Privacy"
        },
        {
          "type": "website",
          "target": "https://homesupport.irobot.com"
        },
        {
          "type": "website",
          "target": "https://homesupport.irobot.com/app/chat/chat_launch"
        },
        {
          "type": "api",
          "target": "https://w2ab2i60y4.execute-api.us-east-1.amazonaws.com/dev/v1/ecommerce/entitlements/{entitlement_id}"
        },
        {
          "type": "api",
          "target": "https://w2ab2i60y4.execute-api.us-east-1.amazonaws.com/dev/v1/ecommerce/notifications/raas"
        },
        {
          "type": "api",
          "target": "https://w2ab2i60y4.execute-api.us-east-1.amazonaws.com/dev/v1/ecommerce/robots/{robot_id}/entitlements"
        },
        {
          "type": "api",
          "target": "https://w2ab2i60y4.execute-api.us-east-1.amazonaws.com/dev/v1/ecommerce/users/{user_id}/entitlements"
        },
        {
          "type": "api",
          "target": "iRobot API Endpoint"
        },
        {
          "type": "website",
          "target": "irobot.in"
        }
      ]
    }
  },
  {
    "name": "Jora",
    "url": "https://bugcrowd.com/jora",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.jora.com"
        },
        {
          "type": "website",
          "target": "*.jora.xyz"
        },
        {
          "type": "ios",
          "target": "https://apps.apple.com/us/app/jora-jobs-job-search-app/id917565665\t"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.jora.android&hl=en_US\t"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.joralocal.com.au\t"
        }
      ]
    }
  },
  {
    "name": "Just Eat - Managed Bug Bounty",
    "url": "https://bugcrowd.com/justeat-ogmbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "*.je-apis.com - UK legacy API"
        },
        {
          "type": "other",
          "target": "*.just-data.io"
        },
        {
          "type": "website",
          "target": "*.just-eat.co.uk - UK food ordering"
        },
        {
          "type": "api",
          "target": "*.just-eat.com "
        },
        {
          "type": "website",
          "target": "*.just-eat.es - Spain food ordering"
        },
        {
          "type": "website",
          "target": "*.just-eat.ie - Ireland food ordering"
        },
        {
          "type": "api",
          "target": "*.just-eat.io"
        },
        {
          "type": "website",
          "target": "*.just-eat.it - Italy food ordering"
        },
        {
          "type": "api",
          "target": "*.justeat-int.com"
        },
        {
          "type": "website",
          "target": "*.menulog.co.nz - New Zealand food ordering"
        },
        {
          "type": "website",
          "target": "*.menulog.com.au - Australia food ordering"
        },
        {
          "type": "website",
          "target": "*.skipthedishes.com - Canada food ordering"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.business.just-eat.co.uk - Just Eat for Business "
        },
        {
          "type": "other",
          "target": "api.skipthedishes.com"
        },
        {
          "type": "website",
          "target": "offers.menulog.co.nz"
        },
        {
          "type": "website",
          "target": "offers.menulog.com.au"
        },
        {
          "type": "website",
          "target": "partneressentials.menulog.co.nz"
        },
        {
          "type": "website",
          "target": "partneressentials.menulog.com.au"
        },
        {
          "type": "website",
          "target": "restaurantawards.menulog.co.nz"
        },
        {
          "type": "website",
          "target": "restaurantawards.menulog.com.au"
        },
        {
          "type": "other",
          "target": "stage.practi.net"
        }
      ]
    }
  },
  {
    "name": "K15t",
    "url": "https://bugcrowd.com/k15t",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1210818/scroll-versions-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1211616/scroll-translations-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1211636/scroll-viewport-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1211636/scroll-viewport-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1215199/backbone-issue-sync-for-jira?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1215199/backbone-issue-sync-for-jira?hosting=datacenter&tab=overview"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1217037/scroll-exporter-extensions?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1217608/scroll-documents-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1217608/scroll-documents-for-confluence?hosting=datacenter&tab=overview"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1226295/variants-for-scroll-documents?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1226295/variants-for-scroll-documents?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1227131/orderly-databases-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1227238/translations-for-scroll-documents?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/1227238/translations-for-scroll-documents?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/24982/scroll-word-exporter-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/24982/scroll-word-exporter-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/253/scroll-imagemap-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/253/scroll-imagemap-for-confluence?hosting=datacenter&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/420604/scroll-html-exporter-for-confluence?hosting=cloud&tab=overview"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/420604/scroll-html-exporter-for-confluence?hosting=datacenter"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/7019/scroll-pdf-exporter-for-confluence?hosting=cloud"
        },
        {
          "type": "other",
          "target": "https://marketplace.atlassian.com/apps/7019/scroll-pdf-exporter-for-confluence?hosting=datacenter"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "Any other subdomains of k15t.com, including but not limited to www.k15t.com, www.k15t.de and help.k15t.com"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/*"
        }
      ]
    }
  },
  {
    "name": "Kaleido",
    "url": "https://bugcrowd.com/kaleido",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.designify.com"
        },
        {
          "type": "website",
          "target": "*.kaleido.ai"
        },
        {
          "type": "website",
          "target": "*.remove.bg"
        },
        {
          "type": "website",
          "target": "*.unscreen.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Keeper Security Public Bounty Program",
    "url": "https://bugcrowd.com/keepersecurity",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 6500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Glyptodon Enterprise"
        },
        {
          "type": "api",
          "target": "Keeper AD / LDAP Bridge"
        },
        {
          "type": "website",
          "target": "Keeper Admin Console (EU)"
        },
        {
          "type": "website",
          "target": "Keeper Admin Console (US)"
        },
        {
          "type": "other",
          "target": "Keeper Browser Extension"
        },
        {
          "type": "api",
          "target": "Keeper SSO Connect On-Prem"
        },
        {
          "type": "api",
          "target": "Keeper Secrets Manager"
        },
        {
          "type": "website",
          "target": "Keeper Security Website"
        },
        {
          "type": "website",
          "target": "Keeper Web Vault (AU)"
        },
        {
          "type": "website",
          "target": "Keeper Web Vault (EU)"
        },
        {
          "type": "website",
          "target": "Keeper Web Vault (US)"
        },
        {
          "type": "android",
          "target": "Keeper for Android"
        },
        {
          "type": "other",
          "target": "Keeper for Mac, PC, Linux"
        },
        {
          "type": "ios",
          "target": "Keeper for iOS"
        },
        {
          "type": "android",
          "target": "KeeperChat for Android"
        },
        {
          "type": "other",
          "target": "KeeperChat for Mac"
        },
        {
          "type": "other",
          "target": "KeeperChat for Windows"
        },
        {
          "type": "ios",
          "target": "KeeperChat for iOS"
        },
        {
          "type": "api",
          "target": "SSO Connect Cloud"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Kenna Security",
    "url": "https://bugcrowd.com/kennasecurity",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Any Host Verified To Be Owned By Kenna (Domains/IP space/etc.)"
        },
        {
          "type": "website",
          "target": "https://[your-subdomain].kennasecurity.com"
        },
        {
          "type": "api",
          "target": "https://api.kennasecurity.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any Kenna Security Platform Subdomain Not Created By You"
        },
        {
          "type": "website",
          "target": "https://www.kennasecurity.com"
        }
      ]
    }
  },
  {
    "name": "Kistler Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/kistler-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.dsl.kistler.com"
        },
        {
          "type": "website",
          "target": "*.hub.kistler.com"
        },
        {
          "type": "website",
          "target": "*.kistudiolab.kistler.com"
        },
        {
          "type": "other",
          "target": "108.17.0.11"
        },
        {
          "type": "other",
          "target": "108.17.0.12"
        },
        {
          "type": "other",
          "target": "108.17.0.26"
        },
        {
          "type": "other",
          "target": "108.17.0.3"
        },
        {
          "type": "other",
          "target": "108.17.0.30"
        },
        {
          "type": "other",
          "target": "108.17.0.6"
        },
        {
          "type": "website",
          "target": "108.17.0.8"
        },
        {
          "type": "other",
          "target": "165.84.187.114"
        },
        {
          "type": "other",
          "target": "165.84.187.115"
        },
        {
          "type": "other",
          "target": "165.84.187.117"
        },
        {
          "type": "other",
          "target": "165.84.187.123"
        },
        {
          "type": "website",
          "target": "176.52.204.69"
        },
        {
          "type": "website",
          "target": "217.110.71.13"
        },
        {
          "type": "other",
          "target": "91.223.79.0/24"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Kiteworks",
    "url": "https://bugcrowd.com/kiteworks-public",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 25000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://bugcrowd-pub.bounty.kiteworks.dev/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Lamoda",
    "url": "https://bugcrowd.com/lamoda",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1600,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "http://photouploader.lamoda.ru/"
        },
        {
          "type": "api",
          "target": "https://api.lamoda.ru"
        },
        {
          "type": "website",
          "target": "https://www.lamoda.ru"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "LastPass",
    "url": "https://bugcrowd.com/lastpass",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Android mobile app"
        },
        {
          "type": "android",
          "target": "LastPass Authenticator Android app"
        },
        {
          "type": "ios",
          "target": "LastPass Authenticator iOS app"
        },
        {
          "type": "other",
          "target": "LastPass browser extensions (Chrome / Safari / Edge / Firefox)"
        },
        {
          "type": "other",
          "target": "Local computer apps (UWP application / Windows installer (MSI))"
        },
        {
          "type": "website",
          "target": "https://lastpass.com"
        },
        {
          "type": "ios",
          "target": "iOS Mobile app"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "LastPass Authenticator Windows Phone app"
        },
        {
          "type": "android",
          "target": "LastPass MFA Android App"
        },
        {
          "type": "ios",
          "target": "LastPass MFA iOS app"
        },
        {
          "type": "other",
          "target": "Lastpass CLI tool"
        },
        {
          "type": "other",
          "target": "Windows Phone app"
        },
        {
          "type": "website",
          "target": "https://blog.lastpass.com/"
        },
        {
          "type": "website",
          "target": "https://forums.lastpass.com/"
        },
        {
          "type": "website",
          "target": "https://identity.lastpass.com/"
        },
        {
          "type": "website",
          "target": "https://support.logmeininc.com/lastpass"
        }
      ]
    }
  },
  {
    "name": "Latitude Financial Services Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/latitudefinancial-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.28degreescard.com.au"
        },
        {
          "type": "website",
          "target": "*.buyersedge.com.au"
        },
        {
          "type": "website",
          "target": "*.carecredit.com.au"
        },
        {
          "type": "website",
          "target": "*.gemcreditline.co.nz"
        },
        {
          "type": "website",
          "target": "*.gemfinance.co.nz"
        },
        {
          "type": "website",
          "target": "*.gemvisa.com.au"
        },
        {
          "type": "website",
          "target": "*.genoapay.co.nz"
        },
        {
          "type": "website",
          "target": "*.genoapay.com"
        },
        {
          "type": "website",
          "target": "*.gomastercard.com.au"
        },
        {
          "type": "website",
          "target": "*.interestfree.com.au"
        },
        {
          "type": "website",
          "target": "*.latitudefinancial.co.nz"
        },
        {
          "type": "website",
          "target": "*.latitudefinancial.com"
        },
        {
          "type": "website",
          "target": "*.latitudefinancial.com.au"
        },
        {
          "type": "website",
          "target": "*.latitudeinfinity.com.au"
        },
        {
          "type": "website",
          "target": "*.latitudepay.com"
        },
        {
          "type": "website",
          "target": "*.latitudepay.com.au"
        },
        {
          "type": "website",
          "target": "*.umiloans.com.au"
        },
        {
          "type": "website",
          "target": "Sympleloans.com.au"
        },
        {
          "type": "api",
          "target": "app.latitudepayapps.com"
        },
        {
          "type": "api",
          "target": "images.latitudepayapps.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Lbrands Bath & Body Works - VDP Pro",
    "url": "https://bugcrowd.com/lbrands-bbw-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "BBW Android app"
        },
        {
          "type": "ios",
          "target": "BBW iOS app"
        },
        {
          "type": "website",
          "target": "https://customercare.bathandbodyworks.com/"
        },
        {
          "type": "website",
          "target": "https://www.bathandbodyworks.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Lbrands Victoria's Secret - VDP Pro",
    "url": "https://bugcrowd.com/lbrands-vs-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Pink Nation Android app"
        },
        {
          "type": "ios",
          "target": "Pink Nation iOS app"
        },
        {
          "type": "android",
          "target": "Victoria's Secret Android app"
        },
        {
          "type": "ios",
          "target": "Victoria's Secret iOS app"
        },
        {
          "type": "website",
          "target": "https://www.victoriassecret.com/us/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "LegalZoom VDP",
    "url": "https://bugcrowd.com/legalzoom-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [

      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "LifterLMS",
    "url": "https://bugcrowd.com/lifterlms",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Advanced Course Add-on Plugins (Assignments and Quizzes)"
        },
        {
          "type": "other",
          "target": "Advanced Videos Add-On Plugin"
        },
        {
          "type": "other",
          "target": "Custom Fields Add-On Plugin"
        },
        {
          "type": "api",
          "target": "Distributed REST API"
        },
        {
          "type": "other",
          "target": "Groups Add-On Plugin"
        },
        {
          "type": "other",
          "target": "LifterLMS Core Plugin"
        },
        {
          "type": "other",
          "target": "PDFs Add-On Plugin"
        },
        {
          "type": "other",
          "target": "Payment Gateway Add-On Plugins (Stripe, PayPal, and Authorize.Net)"
        },
        {
          "type": "other",
          "target": "Social Learning Add-On Plugin"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.lifterlms.com"
        },
        {
          "type": "api",
          "target": "*.lifterlms.com/xmlrpc.php"
        },
        {
          "type": "website",
          "target": "*.myliftersite.com"
        },
        {
          "type": "website",
          "target": "academy.lifterlms.com"
        },
        {
          "type": "website",
          "target": "dev.lifterlms.com"
        },
        {
          "type": "website",
          "target": "https://lifterlms.com/"
        },
        {
          "type": "website",
          "target": "https://myliftersite.com"
        },
        {
          "type": "api",
          "target": "lifterlms.com/xmlrpc.php"
        },
        {
          "type": "website",
          "target": "test.lifterlms.com"
        }
      ]
    }
  },
  {
    "name": "Lime",
    "url": "https://bugcrowd.com/lime",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 7000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "*.lime.bike"
        },
        {
          "type": "website",
          "target": "https://admintool.lime.bike"
        },
        {
          "type": "api",
          "target": "https://api.lime.bike"
        },
        {
          "type": "ios",
          "target": "https://apps.apple.com/us/app/lime/id1199780189"
        },
        {
          "type": "api",
          "target": "https://juicer.lime.bike"
        },
        {
          "type": "api",
          "target": "https://ops.lime.bike"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.limebike"
        },
        {
          "type": "api",
          "target": "https://webviews.lime.bike"
        },
        {
          "type": "api",
          "target": "proxy-production.lime.bike"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.limeinternal.com"
        },
        {
          "type": "website",
          "target": "https://*.li.me"
        },
        {
          "type": "website",
          "target": "https://airflow.limeinternal.com"
        },
        {
          "type": "website",
          "target": "https://help.li.me (zendesk)"
        },
        {
          "type": "website",
          "target": "https://li.me (hubspot)"
        }
      ]
    }
  },
  {
    "name": "Lucid Motors Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/lucidmotors-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.lucidmotors.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "All Internal Applications"
        }
      ]
    }
  },
  {
    "name": "lululemon",
    "url": "https://bugcrowd.com/lululemon",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*.lululemon.com"
        },
        {
          "type": "website",
          "target": "http://www.lululemon.co.uk"
        },
        {
          "type": "website",
          "target": "shop.lululemon.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "http://www.lululemon.co.kr/"
        },
        {
          "type": "website",
          "target": "https://fr.shop.lululemon.com"
        },
        {
          "type": "website",
          "target": "lululemon.cn"
        }
      ]
    }
  },
  {
    "name": "Mastercard",
    "url": "https://bugcrowd.com/mastercard",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "MasterCard.ch - (French) - www.mastercard.ch/fr-ch.html"
        },
        {
          "type": "website",
          "target": "MasterCard.ch - (German) - www.mastercard.ch/de-ch.html"
        },
        {
          "type": "website",
          "target": "MasterCard.com.au - www.mastercard.com.au/en-au.html"
        },
        {
          "type": "website",
          "target": "MasterCard.nl - www.mastercard.nl/nl-nl.html"
        },
        {
          "type": "website",
          "target": "MasterCard.ru - www.mastercard.ru/ru-ru.html"
        },
        {
          "type": "website",
          "target": "MasterCard.us - www.mastercard.us/en-us.html"
        },
        {
          "type": "website",
          "target": "Simplify Commerce - www.simplify.com/commerce/ "
        },
        {
          "type": "website",
          "target": "donate.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://developer.mastercard.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "api",
          "target": "All Available Mastercard Developer APIs"
        },
        {
          "type": "website",
          "target": "Core Priceless.com - demo.priceless.com"
        },
        {
          "type": "website",
          "target": "Order placement on demo.priceless.com"
        },
        {
          "type": "website",
          "target": "demo.priceless.com/golf"
        },
        {
          "type": "website",
          "target": "demo.priceless.com/standup"
        },
        {
          "type": "website",
          "target": "demo.priceless.com/travel"
        }
      ]
    }
  },
  {
    "name": "Mastercard SRC",
    "url": "https://bugcrowd.com/mastercard-src",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "SRC integration on https://masterpassteststore.com/. Only the Masterpass checkout functionality is in scope"
        },
        {
          "type": "website",
          "target": "https://src.mastercard.com/*"
        },
        {
          "type": "website",
          "target": "https://src.mastercard.com/profile/enroll"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://checkout.mastercard.com/"
        },
        {
          "type": "website",
          "target": "https://masterpassteststore.com/"
        },
        {
          "type": "website",
          "target": "https://secure.checkout.visa.com/*"
        },
        {
          "type": "website",
          "target": "https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html"
        }
      ]
    }
  },
  {
    "name": "MasterCard VDP",
    "url": "https://bugcrowd.com/mastercard-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Core Priceless.com - demo.priceless.com"
        },
        {
          "type": "website",
          "target": "https://Globalrisk.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://app.inclusivegrowthscore.com/"
        },
        {
          "type": "website",
          "target": "https://cashpickup.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://citypossible.com"
        },
        {
          "type": "website",
          "target": "https://cocreation.mastercard.com/default"
        },
        {
          "type": "website",
          "target": "https://cxresearch.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://eu.mastercard.com/a/az/qiymetsiz"
        },
        {
          "type": "website",
          "target": "https://europe.priceless.com/"
        },
        {
          "type": "website",
          "target": "https://europe.priceless.com/shb"
        },
        {
          "type": "website",
          "target": "https://global-learning.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://graphic.mastercard.com/mastercard-innovation-forum-2018/ES/website/index.html"
        },
        {
          "type": "website",
          "target": "https://inclusivegrowthscore.com/"
        },
        {
          "type": "website",
          "target": "https://isencaoderolha.mastercard.com.br/"
        },
        {
          "type": "website",
          "target": "https://lacinnovation.mastercard.com/"
        },
        {
          "type": "website",
          "target": "https://learning.mastercard.com/"
        },
        {
          "type": "website",
          "target": "https://mastercardbiz.com/"
        },
        {
          "type": "website",
          "target": "https://mpos.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://mtf.mastercard.co.za/en-za.html"
        },
        {
          "type": "website",
          "target": "https://news.mastercard.com/"
        },
        {
          "type": "website",
          "target": "https://newsroom.mastercard.com/"
        },
        {
          "type": "website",
          "target": "https://partners.mastercard.com/en-us/issuers/"
        },
        {
          "type": "website",
          "target": "https://pathway.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://priceless.com/aa/"
        },
        {
          "type": "website",
          "target": "https://priceless.com/aviator/"
        },
        {
          "type": "website",
          "target": "https://priceless.com/citiaadvantage/"
        },
        {
          "type": "website",
          "target": "https://priceless.com/golf/"
        },
        {
          "type": "website",
          "target": "https://pricelesssurprises.com/"
        },
        {
          "type": "website",
          "target": "https://procurement.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://smartdatademo.mastercard.com"
        },
        {
          "type": "website",
          "target": "https://tasteofpremium.jp"
        },
        {
          "type": "website",
          "target": "https://www.mastercardbiz.ca/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Mastercard (VDP Extension)",
    "url": "https://bugcrowd.com/mastercard-vdp-ext",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Mastercard Receipt Management Android Application"
        },
        {
          "type": "ios",
          "target": "Mastercard Receipt Management iOS Application"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/moderator/comment"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/moderator/comment/pending"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/comment"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/comment/dislike"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/comment/like"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/feedback"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/feedback?"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/reply"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/reply/dislike"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dm/ugc/user/reply/like"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/captcha/generate"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/form/submit"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/offers/getofferdetails/774cc452-1f91-49d9-8a95-5c896ee70b63"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/offers/getofferdetails/8e6a1d47-0489-4cd6-9263-b349b30b91fc"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/search/dm-mccom"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/send/email"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/suggest/dm-mccom"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/twitter/hashtag?hashtag=Priceless"
        },
        {
          "type": "api",
          "target": "https://stage.services.mastercard.com/dxp/twitter/timeline?screenName=MastercardUK"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Millennium Challenge Corporation: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/mcc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.mcc.gov/"
        },
        {
          "type": "website",
          "target": "https://www.mcc.gov/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "MediaLab - Kik Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/medialab-kik-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Kik Android App"
        },
        {
          "type": "ios",
          "target": "Kik iOS App"
        },
        {
          "type": "website",
          "target": "help.kik.com"
        },
        {
          "type": "website",
          "target": "home.kik.com"
        },
        {
          "type": "website",
          "target": "kik.me"
        },
        {
          "type": "website",
          "target": "kinpreview.kik.com"
        },
        {
          "type": "website",
          "target": "link.kik.com"
        },
        {
          "type": "website",
          "target": "m.kik.com"
        },
        {
          "type": "website",
          "target": "meme.kik.com"
        },
        {
          "type": "website",
          "target": "mobile.kik.com"
        },
        {
          "type": "website",
          "target": "my.kik.com"
        },
        {
          "type": "api",
          "target": "profiles.kik.com"
        },
        {
          "type": "website",
          "target": "reddit.kik.com"
        },
        {
          "type": "website",
          "target": "sketch.kik.com"
        },
        {
          "type": "website",
          "target": "www.kik.com"
        },
        {
          "type": "website",
          "target": "youtube.kik.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "MediaLab - WorldStar Hip Hop Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/medialab-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "Legacy API"
        },
        {
          "type": "android",
          "target": "Worldstar Hip Hop Android App"
        },
        {
          "type": "ios",
          "target": "Worldstar Hip Hop iOS App"
        },
        {
          "type": "api",
          "target": "api.worldstarhiphop.com"
        },
        {
          "type": "website",
          "target": "epi.worldstarhiphop.com"
        },
        {
          "type": "api",
          "target": "http://api-legacy.worldstar.com"
        },
        {
          "type": "api",
          "target": "https://api-mobile.worldstar.com"
        },
        {
          "type": "api",
          "target": "https://flagr.worldstarhiphop.com"
        },
        {
          "type": "website",
          "target": "live.worldstarhiphop.com"
        },
        {
          "type": "website",
          "target": "worldstarhiphop.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Mettle",
    "url": "https://bugcrowd.com/mettle",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*.bbp-mettle.co.uk"
        },
        {
          "type": "android",
          "target": "Mettle Android Application"
        },
        {
          "type": "ios",
          "target": "Mettle iOS Application"
        },
        {
          "type": "website",
          "target": "https://ops-tool.internal.bbp-mettle.co.uk/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Monash University",
    "url": "https://bugcrowd.com/monash-esf",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.erc.monash.edu"
        },
        {
          "type": "website",
          "target": "*.monash.edu"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Monash MBB",
    "url": "https://bugcrowd.com/monash-mbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Monash Study Android app"
        },
        {
          "type": "ios",
          "target": "Monash Study iOS App"
        },
        {
          "type": "website",
          "target": "VPN: vpn.monash.edu"
        },
        {
          "type": "website",
          "target": "cms.mobile.monash"
        },
        {
          "type": "website",
          "target": "eassessment.monash.edu"
        },
        {
          "type": "website",
          "target": "fileshare.ze.monash.edu"
        },
        {
          "type": "website",
          "target": "https://agent.apps.monash.edu/"
        },
        {
          "type": "website",
          "target": "https://alumni-friends.monash.edu"
        },
        {
          "type": "website",
          "target": "https://compulsoryunits.monash.edu/"
        },
        {
          "type": "website",
          "target": "https://monashcollege.edu.au"
        },
        {
          "type": "website",
          "target": "https://myapp.monash.edu/"
        },
        {
          "type": "website",
          "target": "https://online.monash.edu/"
        },
        {
          "type": "website",
          "target": "https://study.abroad.monash.edu/"
        },
        {
          "type": "website",
          "target": "identity.monash.edu"
        },
        {
          "type": "api",
          "target": "mix-dev.monash.edu/*"
        },
        {
          "type": "api",
          "target": "mix-qat.monash.edu/*"
        },
        {
          "type": "api",
          "target": "mix.monash.edu/*"
        },
        {
          "type": "website",
          "target": "mobile.monash"
        },
        {
          "type": "website",
          "target": "my.monash"
        },
        {
          "type": "website",
          "target": "status.mobile.monash"
        },
        {
          "type": "website",
          "target": "www.monash.edu"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Moneytree KK",
    "url": "https://bugcrowd.com/moneytreekkog",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "ios",
          "target": "Moneytree iOS Mobile Application (production; see below)"
        },
        {
          "type": "android",
          "target": "Moneytree staging Android Mobile Application (see below)"
        },
        {
          "type": "website",
          "target": "app-staging.getmoneytree.com"
        },
        {
          "type": "website",
          "target": "https://csv-uploader-staging.getmoneytree.com"
        },
        {
          "type": "website",
          "target": "https://engineering-staging.getmoneytree.com "
        },
        {
          "type": "website",
          "target": "https://redash-staging.getmoneytree.com/"
        },
        {
          "type": "website",
          "target": "https://vault-staging.getmoneytree.com"
        },
        {
          "type": "api",
          "target": "jp-api-staging.getmoneytree.com "
        },
        {
          "type": "api",
          "target": "myaccount-staging.getmoneytree.com"
        },
        {
          "type": "website",
          "target": "wwws-staging.moneytree.jp/link/"
        },
        {
          "type": "website",
          "target": "wwws-staging.moneytree.jp/link/mobile/"
        },
        {
          "type": "website",
          "target": "wwws-staging.moneytree.jp/link/mobile/#/signup?client_id=38d99a6e8e9fc87c866f5aa82bdc2569c464b2323a55e0b28f658efa678e9623&redirect_uri=https://wwws-staging.moneytree.jp/link/mobile/callback&response_type=token&scope=guest_read+accounts_read+transactions_read+request_refresh"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any production asset of Moneytree KK (excepting the iOS app)"
        },
        {
          "type": "website",
          "target": "getmoneytree.com"
        },
        {
          "type": "website",
          "target": "moneytree.jp"
        }
      ]
    }
  },
  {
    "name": "NameJet",
    "url": "https://bugcrowd.com/namejet",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "namejet.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "NameJet VDP",
    "url": "https://bugcrowd.com/namejet-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.namejet.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Naspers",
    "url": "https://bugcrowd.com/naspers",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.naspers.co"
        },
        {
          "type": "website",
          "target": "*.naspers.co.in"
        },
        {
          "type": "website",
          "target": "*.naspers.com"
        },
        {
          "type": "website",
          "target": "*.naspers.fr"
        },
        {
          "type": "website",
          "target": "*.naspers.us"
        },
        {
          "type": "website",
          "target": "*.naspersventures.com"
        },
        {
          "type": "website",
          "target": "*.prosus.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "development-naspersbrand.naspers.com"
        },
        {
          "type": "website",
          "target": "development-nasperspolicy.naspers.com"
        },
        {
          "type": "website",
          "target": "development-prosus.naspers.com"
        },
        {
          "type": "website",
          "target": "development.naspers.com"
        }
      ]
    }
  },
  {
    "name": "NAB's Responsible Disclosure Program",
    "url": "https://bugcrowd.com/nationalaustraliabankog",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.86400.com.au "
        },
        {
          "type": "website",
          "target": "*.advantedge.com.au"
        },
        {
          "type": "website",
          "target": "*.claiming.com.au"
        },
        {
          "type": "website",
          "target": "*.globalfintechlink.com"
        },
        {
          "type": "website",
          "target": "*.hicaps.com.au"
        },
        {
          "type": "website",
          "target": "*.jbwere.co.nz"
        },
        {
          "type": "website",
          "target": "*.jbwere.com.au"
        },
        {
          "type": "website",
          "target": "*.lanternpay.com"
        },
        {
          "type": "website",
          "target": "*.medfin.com.au"
        },
        {
          "type": "website",
          "target": "*.nab.com.au"
        },
        {
          "type": "website",
          "target": "*.nabbroker.com.au"
        },
        {
          "type": "website",
          "target": "*.nabequitylending.com.au "
        },
        {
          "type": "website",
          "target": "*.nabmarginlending.com.au"
        },
        {
          "type": "website",
          "target": "*.nabtrade.com.au"
        },
        {
          "type": "website",
          "target": "*.ubank.com.au"
        },
        {
          "type": "other",
          "target": "Any other assets that appear to belong to NAB Group"
        },
        {
          "type": "website",
          "target": "https://garvan.mlc.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.apogee.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.godfreypembroke.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.meritumfinancialgroup.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.mlc.com.au/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "NEOGOV Public Assets",
    "url": "https://bugcrowd.com/neohrms",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://analytics.neogov.com"
        },
        {
          "type": "website",
          "target": "https://api.neogov.com"
        },
        {
          "type": "website",
          "target": "https://cdn.neogov.com"
        },
        {
          "type": "website",
          "target": "https://eforms.neogov.com"
        },
        {
          "type": "website",
          "target": "https://learn.neogov.com"
        },
        {
          "type": "website",
          "target": "https://login.neogov.com"
        },
        {
          "type": "website",
          "target": "https://onboard.neogov.com"
        },
        {
          "type": "website",
          "target": "https://performance.neogov.com"
        },
        {
          "type": "website",
          "target": "https://secure.neogov.com"
        },
        {
          "type": "website",
          "target": "https://unified.neogov.com"
        },
        {
          "type": "website",
          "target": "https://www.governmentjobs.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Netflix",
    "url": "https://bugcrowd.com/netflix",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 20000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " meechum.netflix.com"
        },
        {
          "type": "website",
          "target": "*.nflxext.com"
        },
        {
          "type": "website",
          "target": "*.nflximg.net"
        },
        {
          "type": "website",
          "target": "*.nflxso.net"
        },
        {
          "type": "website",
          "target": "*.nflxvideo.net"
        },
        {
          "type": "api",
          "target": "*.prod.cloud.netflix.com"
        },
        {
          "type": "api",
          "target": "*.prod.dradis.netflix.com"
        },
        {
          "type": "api",
          "target": "*.prod.ftl.netflix.com"
        },
        {
          "type": "website",
          "target": "Content Authorization Findings"
        },
        {
          "type": "other",
          "target": "Corporate Targets"
        },
        {
          "type": "other",
          "target": "Microsites"
        },
        {
          "type": "android",
          "target": "Netflix Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "Netflix Mobile Application for iOS"
        },
        {
          "type": "website",
          "target": "Open Source - Atlas"
        },
        {
          "type": "website",
          "target": "Open Source - Conductor"
        },
        {
          "type": "website",
          "target": "Open Source - Consoleme"
        },
        {
          "type": "website",
          "target": "Open Source - Dispatch"
        },
        {
          "type": "website",
          "target": "Open Source - Spectator"
        },
        {
          "type": "website",
          "target": "Open Source - Weep"
        },
        {
          "type": "website",
          "target": "Open Source - Zuul"
        },
        {
          "type": "other",
          "target": "Secondary Targets (read below)"
        },
        {
          "type": "api",
          "target": "api*.netflix.com"
        },
        {
          "type": "website",
          "target": "beacon.netflix.com"
        },
        {
          "type": "website",
          "target": "customerevents.netflix.com"
        },
        {
          "type": "website",
          "target": "dockhand.netflix.com"
        },
        {
          "type": "website",
          "target": "help.netflix.com"
        },
        {
          "type": "website",
          "target": "ichnaea.netflix.com"
        },
        {
          "type": "website",
          "target": "nmtracking.netflix.com"
        },
        {
          "type": "website",
          "target": "presentationtracking.netflix.com"
        },
        {
          "type": "website",
          "target": "secure.netflix.com"
        },
        {
          "type": "website",
          "target": "www.netflix.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "NETGEAR Cash Rewards",
    "url": "https://bugcrowd.com/netgear",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1200,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Insight Android App"
        },
        {
          "type": "website",
          "target": "Insight Cloud Portal"
        },
        {
          "type": "iot",
          "target": "Insight Managed Smart Cloud Wireless Access Point"
        },
        {
          "type": "ios",
          "target": "Insight iOS App"
        },
        {
          "type": "iot",
          "target": "Meural"
        },
        {
          "type": "android",
          "target": "Nighthawk Android App"
        },
        {
          "type": "iot",
          "target": "Nighthawk Pro Gaming Router"
        },
        {
          "type": "iot",
          "target": "Nighthawk Pro Gaming Switch"
        },
        {
          "type": "iot",
          "target": "Nighthawk Router"
        },
        {
          "type": "iot",
          "target": "Nighthawk Switch"
        },
        {
          "type": "ios",
          "target": "Nighthawk iOS App"
        },
        {
          "type": "iot",
          "target": "Orbi "
        },
        {
          "type": "android",
          "target": "Orbi Android App "
        },
        {
          "type": "ios",
          "target": "Orbi iOS App "
        },
        {
          "type": "api",
          "target": "https://api.netgear.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "NETGEAR Kudos Rewards",
    "url": "https://bugcrowd.com/netgearkudos",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [

      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Bluehost",
    "url": "https://bugcrowd.com/newfold-bluehost",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "helpchat.bluehost.com"
        },
        {
          "type": "website",
          "target": "kb.bluehost.com"
        },
        {
          "type": "website",
          "target": "my.bluehost.com"
        },
        {
          "type": "website",
          "target": "www.bluehost.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "BlueHost VDP",
    "url": "https://bugcrowd.com/newfold-bluehostindia-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bluehost.com"
        },
        {
          "type": "website",
          "target": "*.bluehost.in"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope"
        }
      ]
    }
  },
  {
    "name": "Newfold Builder VDP",
    "url": "https://bugcrowd.com/newfold-builder-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.websitebuilder.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope"
        }
      ]
    }
  },
  {
    "name": "Reseller Club VDP Pro",
    "url": "https://bugcrowd.com/newfold-resellerclub-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.resellerclub.com"
        },
        {
          "type": "api",
          "target": "https://httpapi.com"
        },
        {
          "type": "website",
          "target": "https://obmobileapp.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope"
        }
      ]
    }
  },
  {
    "name": "Siteplus Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/newfold-siteplus-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://siteplus.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope"
        }
      ]
    }
  },
  {
    "name": "Newfold Vdeck Bug Bounty",
    "url": "https://bugcrowd.com/newfold-vdeck-bb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "ca.ipage.com"
        },
        {
          "type": "website",
          "target": "images.ipage.com"
        },
        {
          "type": "website",
          "target": "ipage.com"
        },
        {
          "type": "website",
          "target": "members.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-images.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-members.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-secure.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-www.ipage.com"
        },
        {
          "type": "website",
          "target": "secure.ipage.com"
        },
        {
          "type": "website",
          "target": "vdeck.ipage.com"
        },
        {
          "type": "website",
          "target": "www-origin.ipage.com"
        },
        {
          "type": "website",
          "target": "www.ipage.com"
        },
        {
          "type": "website",
          "target": "www1.ipage.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Newfold Vdeck VDP",
    "url": "https://bugcrowd.com/newfold-vdeck-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "ca.ipage.com"
        },
        {
          "type": "website",
          "target": "controlpanel.domain.com"
        },
        {
          "type": "website",
          "target": "controlpanel.mydomain.com"
        },
        {
          "type": "website",
          "target": "images.domain.com"
        },
        {
          "type": "website",
          "target": "images.ipage.com"
        },
        {
          "type": "website",
          "target": "images.mydomain.com"
        },
        {
          "type": "website",
          "target": "ipage.com"
        },
        {
          "type": "website",
          "target": "members.domain.com"
        },
        {
          "type": "website",
          "target": "members.ipage.com"
        },
        {
          "type": "website",
          "target": "members.mydomain.com"
        },
        {
          "type": "website",
          "target": "mydomain.com"
        },
        {
          "type": "website",
          "target": "origin-images.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-members.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-secure.ipage.com"
        },
        {
          "type": "website",
          "target": "origin-www.ipage.com"
        },
        {
          "type": "website",
          "target": "origin.domain.com"
        },
        {
          "type": "website",
          "target": "secure.domain.com"
        },
        {
          "type": "website",
          "target": "secure.ipage.com"
        },
        {
          "type": "website",
          "target": "secure.mydomain.com"
        },
        {
          "type": "website",
          "target": "vdeck.domain.com"
        },
        {
          "type": "website",
          "target": "vdeck.ipage.com"
        },
        {
          "type": "website",
          "target": "www-origin.ipage.com"
        },
        {
          "type": "website",
          "target": "www.ipage.com"
        },
        {
          "type": "website",
          "target": "www.mydomain.com"
        },
        {
          "type": "website",
          "target": "www1.domain.com"
        },
        {
          "type": "website",
          "target": "www1.ipage.com"
        },
        {
          "type": "website",
          "target": "www1.mydomain.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Anything not explicitly listed as in scope"
        }
      ]
    }
  },
  {
    "name": "Nextup.ai",
    "url": "https://bugcrowd.com/nextupai",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1219324/slack-integration-for-jira?hosting=cloud&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1224706/helpdesk-intuitive-slack-first-support?hosting=cloud&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1224706/slack-first-support-helpdesk?hosting=cloud&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1227628/microsoft-teams-integration-for-jira?hosting=cloud&tab=overview"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1227656/docs-slack-for-confluence?hosting=cloud&tab=overview"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "NiceHash",
    "url": "https://bugcrowd.com/nicehash-og",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "NHOS - Mining operating system"
        },
        {
          "type": "android",
          "target": "NiceHash Android Application"
        },
        {
          "type": "website",
          "target": "NiceHash Mining Platform - Private web"
        },
        {
          "type": "website",
          "target": "NiceHash Mining Platform - Public web"
        },
        {
          "type": "api",
          "target": "NiceHash Platform API"
        },
        {
          "type": "website",
          "target": "NiceHash Shop web"
        },
        {
          "type": "ios",
          "target": "NiceHash iOS Application"
        },
        {
          "type": "other",
          "target": "NiceHashMiner - Mining client"
        },
        {
          "type": "other",
          "target": "NiceHashQuickMiner - Mining client"
        },
        {
          "type": "api",
          "target": "NiceX Crypto Exchange - API"
        },
        {
          "type": "website",
          "target": "NiceX Crypto Exchange - Private web"
        },
        {
          "type": "website",
          "target": "NiceX Crypto Exchange - Public web"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "National Labor Relations Board: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/nlrb-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.NLRB.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Northwestern Mutual VDP",
    "url": "https://bugcrowd.com/northwestern-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.northwesternmutual.com\t"
        },
        {
          "type": "website",
          "target": "Anything Owned by Northwestern Mutual on the Public Internet"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.nm.com"
        },
        {
          "type": "website",
          "target": "Emerald Publications - Anything That Resolves to 199.59.136.0 - 199.59.139.255 (CIDR: 199.59.136.0/22)"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/careers-apply/"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/financial-professionals/?name=*"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/financial/advisor/*"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/find-a-financial-advisor/"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/notice-of-disability-form/"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/notice-of-group-disability-form/"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/notice-of-long-term-care-form/"
        },
        {
          "type": "website",
          "target": "northwesternmutual.com/report-a-death/"
        }
      ]
    }
  },
  {
    "name": "National Transportation Safety Board: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/ntsb-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.ntsb.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Octopus Deploy",
    "url": "https://bugcrowd.com/octopus-deploy",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Octopus Server"
        },
        {
          "type": "other",
          "target": "Octopus Tentacle"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Octopus",
    "url": "https://bugcrowd.com/octopus-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.octopus.com"
        },
        {
          "type": "other",
          "target": "Octopus Deploy Git Repo"
        },
        {
          "type": "website",
          "target": "octopus.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.octopus.app"
        },
        {
          "type": "website",
          "target": "artifactorysample.octopus.com"
        },
        {
          "type": "website",
          "target": "bamboosample.octopus.com"
        },
        {
          "type": "website",
          "target": "jenkinssample.octopus.com"
        },
        {
          "type": "website",
          "target": "myget.octopus.com"
        },
        {
          "type": "website",
          "target": "nexussample.octopus.com"
        },
        {
          "type": "website",
          "target": "teamcitysample.octopus.com"
        }
      ]
    }
  },
  {
    "name": "Okta",
    "url": "https://bugcrowd.com/okta",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 25000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Okta Agent Windows"
        },
        {
          "type": "other",
          "target": "Okta Browser Plugin (IE / Firefox / Chrome)"
        },
        {
          "type": "android",
          "target": "Okta MDM (Android)"
        },
        {
          "type": "ios",
          "target": "Okta MDM (iOS)"
        },
        {
          "type": "other",
          "target": "Okta On-Prem Agents ( AD, LDAP, RDP, IWA )"
        },
        {
          "type": "android",
          "target": "Okta Verify (Android)"
        },
        {
          "type": "ios",
          "target": "Okta Verify (iOS)"
        },
        {
          "type": "website",
          "target": "bugcrowd-%username%-1.oktapreview.com"
        },
        {
          "type": "website",
          "target": "bugcrowd-%username%-2.oktapreview.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "OLX Group",
    "url": "https://bugcrowd.com/olxgroup",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.imovirtual.com"
        },
        {
          "type": "website",
          "target": "*.olx.pl"
        },
        {
          "type": "website",
          "target": "*.otodom.pl"
        },
        {
          "type": "website",
          "target": "*.otomoto.pl"
        },
        {
          "type": "website",
          "target": "*.standvirtual.com"
        },
        {
          "type": "website",
          "target": "https://olx.pt"
        },
        {
          "type": "website",
          "target": "https://www.letgo.com"
        },
        {
          "type": "website",
          "target": "https://www.olx.in"
        },
        {
          "type": "website",
          "target": "https://www.olxautos.cl/"
        },
        {
          "type": "website",
          "target": "https://www.olxautos.com.mx/"
        },
        {
          "type": "website",
          "target": "https://www.olxautos.com.pe/"
        },
        {
          "type": "website",
          "target": "https://www.otoplus.com/"
        },
        {
          "type": "website",
          "target": "payments.olx.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "OneTrust",
    "url": "https://bugcrowd.com/onetrust",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 6500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://pentest-app.onetrust.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://*.convercent.com"
        },
        {
          "type": "website",
          "target": "https://*.cookielaw.org"
        },
        {
          "type": "website",
          "target": "https://*.cookiepro.com"
        },
        {
          "type": "website",
          "target": "https://*.dataguidance.com"
        },
        {
          "type": "website",
          "target": "https://*.esgiq.com"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.com"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.de"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.es"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.fr"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.it"
        },
        {
          "type": "website",
          "target": "https://*.onetrust.se"
        },
        {
          "type": "website",
          "target": "https://*.onetrustgrc.com"
        },
        {
          "type": "website",
          "target": "https://*.onetrustpro.com"
        },
        {
          "type": "website",
          "target": "https://*.preferencechoice.com"
        },
        {
          "type": "website",
          "target": "https://*.privacyconnect.com"
        },
        {
          "type": "website",
          "target": "https://*.privacypedia.com"
        },
        {
          "type": "website",
          "target": "https://*.privacytech.com"
        },
        {
          "type": "website",
          "target": "https://*.redacted.ai"
        },
        {
          "type": "website",
          "target": "https://*.sharedassessments.org"
        },
        {
          "type": "website",
          "target": "https://*.trustweek2021.com"
        },
        {
          "type": "website",
          "target": "https://*.vendorpedia.com"
        },
        {
          "type": "website",
          "target": "https://app.vendorpedia.com"
        },
        {
          "type": "website",
          "target": "https://developer.onetrust.com"
        },
        {
          "type": "website",
          "target": "https://my.onetrust.com"
        },
        {
          "type": "website",
          "target": "https://store.onetrust.com"
        },
        {
          "type": "website",
          "target": "https://tv.onetrust.com/"
        }
      ]
    }
  },
  {
    "name": "Office of Navajo and Hopi Indian Relocation (ONHIR) - Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/onhir-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.onhir.gov/"
        },
        {
          "type": "website",
          "target": "https://www.onhir.gov/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Office of Natural Resources Revenue",
    "url": "https://bugcrowd.com/onrr-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.onrr.gov"
        },
        {
          "type": "website",
          "target": "revenuedata.doi.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Opera Public Bug Bounty",
    "url": "https://bugcrowd.com/opera",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.apex-football.com"
        },
        {
          "type": "website",
          "target": "*.dailyadvent.com"
        },
        {
          "type": "api",
          "target": "*.feednews.com"
        },
        {
          "type": "website",
          "target": "*.oleads.com"
        },
        {
          "type": "api",
          "target": "*.opera-mini.net"
        },
        {
          "type": "website",
          "target": "*.opera.com"
        },
        {
          "type": "api",
          "target": "*.opera.news"
        },
        {
          "type": "other",
          "target": "*.opera.software"
        },
        {
          "type": "api",
          "target": "*.opera.technology"
        },
        {
          "type": "website",
          "target": "*.operafootball.com"
        },
        {
          "type": "api",
          "target": "*.operanewsapp.com"
        },
        {
          "type": "api",
          "target": "*.osp.opera.software"
        },
        {
          "type": "api",
          "target": "*.sec-tunnel.com"
        },
        {
          "type": "api",
          "target": "*.yoyogames.com"
        },
        {
          "type": "api",
          "target": "102.23.96.0/22"
        },
        {
          "type": "api",
          "target": "103.83.120.0/22"
        },
        {
          "type": "api",
          "target": "107.167.96.0/19"
        },
        {
          "type": "api",
          "target": "141.0.8.0/21"
        },
        {
          "type": "api",
          "target": "185.26.180.0/22"
        },
        {
          "type": "api",
          "target": "195.189.143.0/24"
        },
        {
          "type": "api",
          "target": "203.89.100.0/22"
        },
        {
          "type": "api",
          "target": "37.228.104.0/21"
        },
        {
          "type": "api",
          "target": "77.111.244.0/22"
        },
        {
          "type": "api",
          "target": "82.145.208.0/20"
        },
        {
          "type": "api",
          "target": "91.203.96.0/22"
        },
        {
          "type": "android",
          "target": "Apex Football"
        },
        {
          "type": "other",
          "target": "GameMaker Studio 2"
        },
        {
          "type": "website",
          "target": "Loomi.tv"
        },
        {
          "type": "other",
          "target": "Opera GX"
        },
        {
          "type": "android",
          "target": "Opera GX for Android"
        },
        {
          "type": "android",
          "target": "Opera Mini"
        },
        {
          "type": "android",
          "target": "Opera News"
        },
        {
          "type": "other",
          "target": "Opera PC"
        },
        {
          "type": "android",
          "target": "Opera for Android "
        },
        {
          "type": "api",
          "target": "accounts.opera.com"
        },
        {
          "type": "website",
          "target": "auth.opera.com"
        },
        {
          "type": "api",
          "target": "autoupdate.geo.opera.com"
        },
        {
          "type": "api",
          "target": "blocklist.opera-api.com"
        },
        {
          "type": "api",
          "target": "browser-notifications.opera.com"
        },
        {
          "type": "website",
          "target": "bugs.opera.com"
        },
        {
          "type": "website",
          "target": "cashback.opera.com"
        },
        {
          "type": "api",
          "target": "cdn-store.opera-api.com"
        },
        {
          "type": "api",
          "target": "cryptowallet.opera-api.com"
        },
        {
          "type": "website",
          "target": "download.opera.com"
        },
        {
          "type": "api",
          "target": "exchange.opera.com"
        },
        {
          "type": "api",
          "target": "features.opera-api.com"
        },
        {
          "type": "api",
          "target": "flow.opera.com"
        },
        {
          "type": "website",
          "target": "get.geo.opera.com"
        },
        {
          "type": "api",
          "target": "gx.opera-api.com"
        },
        {
          "type": "api",
          "target": "https://api.gx.games/dc"
        },
        {
          "type": "api",
          "target": "https://api.gx.games/gxc"
        },
        {
          "type": "website",
          "target": "https://create.gx.games"
        },
        {
          "type": "website",
          "target": "https://gx.games"
        },
        {
          "type": "website",
          "target": "marketplace.yoyogames.com"
        },
        {
          "type": "api",
          "target": "merchandise.opera-api.com"
        },
        {
          "type": "api",
          "target": "net.geo.opera.com"
        },
        {
          "type": "api",
          "target": "push.opera.com"
        },
        {
          "type": "api",
          "target": "speeddials.opera.com"
        },
        {
          "type": "api",
          "target": "suggestions.opera-api.com"
        },
        {
          "type": "api",
          "target": "weather.opera-api.com"
        },
        {
          "type": "website",
          "target": "www.gamemaker.io"
        },
        {
          "type": "website",
          "target": "www.opera.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "accountsstage.yoyogames.com"
        },
        {
          "type": "website",
          "target": "admanager.opera.com"
        },
        {
          "type": "website",
          "target": "app.opera.com"
        },
        {
          "type": "website",
          "target": "apps.opera.com"
        },
        {
          "type": "website",
          "target": "bugs.yoyogames.com"
        },
        {
          "type": "website",
          "target": "certs.opera.com"
        },
        {
          "type": "website",
          "target": "checkout.opera.com"
        },
        {
          "type": "website",
          "target": "control.gx-servers.opera.com"
        },
        {
          "type": "website",
          "target": "help.gx-servers.opera.com"
        },
        {
          "type": "website",
          "target": "help.yoyogames.com"
        },
        {
          "type": "website",
          "target": "investor.opera.com"
        },
        {
          "type": "website",
          "target": "mobilestore.opera.com"
        }
      ]
    }
  },
  {
    "name": "Office of Personnel Management - Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/opm-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [

      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Opsgenie",
    "url": "https://bugcrowd.com/opsgenie",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.opsgenie.com"
        },
        {
          "type": "android",
          "target": "Opsgenie (Android)"
        },
        {
          "type": "ios",
          "target": "Opsgenie (IoS)"
        },
        {
          "type": "website",
          "target": "app.opsgenie.com"
        },
        {
          "type": "website",
          "target": "mobileapp.opsgenie.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any internal or development services."
        },
        {
          "type": "website",
          "target": "Opsgenie Production (billing systems, third parties)"
        }
      ]
    }
  },
  {
    "name": "Optimizely",
    "url": "https://bugcrowd.com/optimizely",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://accounts.welcomesoftware.com/"
        },
        {
          "type": "website",
          "target": "https://analytics.welcomesoftware.com/"
        },
        {
          "type": "api",
          "target": "https://api.optimizely.com/"
        },
        {
          "type": "api",
          "target": "https://api.prod.optimizely.com"
        },
        {
          "type": "api",
          "target": "https://api.welcomesoftware.com/ "
        },
        {
          "type": "website",
          "target": "https://app.optimizely.com/"
        },
        {
          "type": "website",
          "target": "https://app.welcomesoftware.com/"
        },
        {
          "type": "website",
          "target": "https://cdn-app.welcomesoftware.com/"
        },
        {
          "type": "website",
          "target": "https://cdn-pci.optimizely.com/"
        },
        {
          "type": "website",
          "target": "https://cdn.optimizely.com/"
        },
        {
          "type": "website",
          "target": "https://dxc.episerver.net/ "
        },
        {
          "type": "website",
          "target": "https://optimizely-edge.com"
        },
        {
          "type": "website",
          "target": "https://paasportal.episerver.net/"
        },
        {
          "type": "website",
          "target": "https://paasportal.episerver.net/api/v1.0/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://www.optimizely.com/"
        }
      ]
    }
  },
  {
    "name": "Origin Energy",
    "url": "https://bugcrowd.com/originenergy-og1",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "*.api.originenergy.com.au"
        },
        {
          "type": "website",
          "target": "*.download.originenergy.com.au"
        },
        {
          "type": "website",
          "target": "*.odcdn.com.au"
        },
        {
          "type": "website",
          "target": "*.origindigital-pac.com.au"
        },
        {
          "type": "website",
          "target": "*.support.originenergy.com.au"
        },
        {
          "type": "website",
          "target": "dataportal.originenergy.com.au"
        },
        {
          "type": "api",
          "target": "https://api.rx.originenergy.com.au/v1/gateway/schema/graphql"
        },
        {
          "type": "api",
          "target": "https://api.rx.originenergy.com.au/v1/gateway/schema/kraken/graphql"
        },
        {
          "type": "api",
          "target": "https://api.rx.originenergy.com.au/v1/lpg/graphql"
        },
        {
          "type": "website",
          "target": "https://www.originenergy.com.au/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://auth.api.originenergy.com.au/**"
        },
        {
          "type": "website",
          "target": "https://origin-energy.formstack.com/**"
        },
        {
          "type": "website",
          "target": "https://www.originenergy.com.au/moving/"
        }
      ]
    }
  },
  {
    "name": "Occupational Safety and Health Review Commission: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/oshrc-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://www.oshrc.gov/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "oshrc.entellirak.com"
        }
      ]
    }
  },
  {
    "name": "Ostrom Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/ostrom-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Ostrom Android application"
        },
        {
          "type": "ios",
          "target": "Ostrom iOS Application"
        },
        {
          "type": "website",
          "target": "https://www.ostrom.de/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Overstock's Vulnerability Disclosure Page!",
    "url": "https://bugcrowd.com/overstockvdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " www.overstock.ca "
        },
        {
          "type": "website",
          "target": "*.overstock.com"
        },
        {
          "type": "website",
          "target": "*.overstockgovernment.com"
        },
        {
          "type": "website",
          "target": "*.supplieroasis.com"
        },
        {
          "type": "android",
          "target": "Overstock Android Mobile App"
        },
        {
          "type": "ios",
          "target": "Overstock iOS Mobile App"
        },
        {
          "type": "website",
          "target": "cars.overstock.com"
        },
        {
          "type": "api",
          "target": "checkout.overstockgovernment.com"
        },
        {
          "type": "api",
          "target": "http(s)://api.overstock.com"
        },
        {
          "type": "website",
          "target": "overstockgovernment.com"
        },
        {
          "type": "website",
          "target": "pets.overstock.com"
        },
        {
          "type": "website",
          "target": "www.overstock.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.handmade.com "
        },
        {
          "type": "website",
          "target": "blog.overstock.com"
        },
        {
          "type": "website",
          "target": "financehub.overstock.com"
        },
        {
          "type": "website",
          "target": "help.overstock.com"
        },
        {
          "type": "website",
          "target": "hotels.overstock.com"
        },
        {
          "type": "website",
          "target": "investors.overstock.com"
        },
        {
          "type": "other",
          "target": "miq.overstock.com"
        },
        {
          "type": "website",
          "target": "snow.overstock.com"
        }
      ]
    }
  },
  {
    "name": "OWASP CSRFGuard",
    "url": "https://bugcrowd.com/owaspcrsfguard",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://github.com/OWASP/OWASPBugBounty/tree/master/CRSFGuard"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "OWASP Java Encoder",
    "url": "https://bugcrowd.com/owaspjavaencoder",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://github.com/OWASP/OWASPBugBounty/tree/master/JavaEncoder"
        },
        {
          "type": "other",
          "target": "https://github.com/OWASP/OWASPBugBounty/tree/master/JavaEncoder/war-files"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "OWASP Java HTML Sanitizer",
    "url": "https://bugcrowd.com/owaspjavasanitizer",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://github.com/OWASP/OWASPBugBounty/tree/master/JavaHTMLSanitizer/war-files"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "OWASP® ZAP",
    "url": "https://bugcrowd.com/owaspzap",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Latest ZAP version (2.12.0)"
        },
        {
          "type": "website",
          "target": "https://www.zaproxy.org"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Office of Wildland Fire - Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/owf-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.firenet.gov"
        },
        {
          "type": "website",
          "target": "*.nfpors.gov\t"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Privacy and Civil Liberties Oversight Board: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/pclob-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.pclob.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Personal Capital",
    "url": "https://bugcrowd.com/personalcapital",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://devstaging.pcapcloud.com/*"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Pexels",
    "url": "https://bugcrowd.com/pexels",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.pexels.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Phemex Bug Bounty",
    "url": "https://bugcrowd.com/phemex",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Phemex Android app"
        },
        {
          "type": "website",
          "target": "Phemex Website"
        },
        {
          "type": "ios",
          "target": "Phemex iOS app"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Phemex Academy"
        },
        {
          "type": "website",
          "target": "Phemex Blog"
        },
        {
          "type": "website",
          "target": "Phemex Learn & Earn"
        },
        {
          "type": "website",
          "target": "Phemex Testnet"
        },
        {
          "type": "website",
          "target": "Phemex User Guides"
        }
      ]
    }
  },
  {
    "name": "Phrase Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/phrase-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "http://api.phrase.com/"
        },
        {
          "type": "website",
          "target": "http://app.phrase.com/"
        },
        {
          "type": "website",
          "target": "http://phrase.com/"
        },
        {
          "type": "website",
          "target": "https://cloud9.memsource.com/"
        },
        {
          "type": "api",
          "target": "https://cloud9.memsource.com/web/docs/api"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Pinterest",
    "url": "https://bugcrowd.com/pinterest",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 25000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.pinterest.com Web Apps"
        },
        {
          "type": "other",
          "target": "Chrome extension (download at: chrome.google.com/webstore/detail/pinterest-save-button/gpdjojdkbbmdfjfahjcgigfpmkopogic?hl=en)"
        },
        {
          "type": "other",
          "target": "Edge extension (download at: ms-windows-store://pdp/?productid=9nblggh4v89b )"
        },
        {
          "type": "other",
          "target": "Firefox extension (download at:   https://addons.mozilla.org/firefox/addon/pinterest/)"
        },
        {
          "type": "other",
          "target": "Open source projects listed at github.com/pinterest/"
        },
        {
          "type": "android",
          "target": "Pinterest Android Mobile Application"
        },
        {
          "type": "ios",
          "target": "Pinterest iOS Mobile Application"
        },
        {
          "type": "other",
          "target": "Safari extension (download at: assets.pinterest.com/ext/Pinterest-Safari.safariextz)"
        },
        {
          "type": "api",
          "target": "api.pinterest.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Pixabay",
    "url": "https://bugcrowd.com/pixabay",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.pixabay.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "PlanetHoster",
    "url": "https://bugcrowd.com/planethosterinc",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " world.planethoster.net"
        },
        {
          "type": "api",
          "target": "api.planethoster.net"
        },
        {
          "type": "website",
          "target": "https://mg.n0c.com/"
        },
        {
          "type": "website",
          "target": "my.planethoster.com"
        },
        {
          "type": "website",
          "target": "www.planethoster.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Private Internet Access",
    "url": "https://bugcrowd.com/privateinternetaccess",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 1250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.privateinternetaccess.com"
        },
        {
          "type": "api",
          "target": "PIA APIs"
        },
        {
          "type": "android",
          "target": "PIA Android application"
        },
        {
          "type": "other",
          "target": "PIA Chrome extension"
        },
        {
          "type": "other",
          "target": "PIA Firefox extension"
        },
        {
          "type": "other",
          "target": "PIA Linux application"
        },
        {
          "type": "other",
          "target": "PIA Opera extension"
        },
        {
          "type": "hardware",
          "target": "PIA Router Firmware"
        },
        {
          "type": "other",
          "target": "PIA VPN servers"
        },
        {
          "type": "other",
          "target": "PIA Windows application"
        },
        {
          "type": "ios",
          "target": "PIA iOS application"
        },
        {
          "type": "other",
          "target": "PIA macOS application"
        },
        {
          "type": "website",
          "target": "piaservers.com"
        },
        {
          "type": "website",
          "target": "privateinternetaccess.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Prosus",
    "url": "https://bugcrowd.com/prosus-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "analytics-admin.prosus.com"
        },
        {
          "type": "website",
          "target": "analytics.prosus.com"
        },
        {
          "type": "website",
          "target": "azreporting.naspers.com/vpn/index.html"
        },
        {
          "type": "website",
          "target": "brandportal.naspers.com"
        },
        {
          "type": "website",
          "target": "cfc.naspers.com"
        },
        {
          "type": "website",
          "target": "dashboard.naspers.com"
        },
        {
          "type": "website",
          "target": "dealflow.prosus.com"
        },
        {
          "type": "api",
          "target": "dealflowapi.prosus.com"
        },
        {
          "type": "website",
          "target": "legal.prosus.com"
        },
        {
          "type": "website",
          "target": "peopleview.naspers.com"
        },
        {
          "type": "website",
          "target": "prosus.com"
        },
        {
          "type": "website",
          "target": "publicpolicy.naspers.com"
        },
        {
          "type": "website",
          "target": "tracker.naspers.com"
        },
        {
          "type": "website",
          "target": "www.naspers.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Pretrial Services Agency for the District of Columbia",
    "url": "https://bugcrowd.com/psa-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.pretrialservices.gov"
        },
        {
          "type": "website",
          "target": "*.psa.gov"
        },
        {
          "type": "website",
          "target": "pretrialservices.gov"
        },
        {
          "type": "website",
          "target": "psa.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Quizlet",
    "url": "https://bugcrowd.com/quizlet",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "3.0 API"
        },
        {
          "type": "android",
          "target": "Android"
        },
        {
          "type": "ios",
          "target": "IoS"
        },
        {
          "type": "website",
          "target": "https://*.quizlet.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": " help.quizlet.com (zendesk)"
        },
        {
          "type": "api",
          "target": "2.0 API"
        }
      ]
    }
  },
  {
    "name": "Rakuten VDP",
    "url": "https://bugcrowd.com/rakuten-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.rakuten.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Rarible",
    "url": "https://bugcrowd.com/rarible-ogmbb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " https://rari.foundation"
        },
        {
          "type": "website",
          "target": "admin.rarible.com"
        },
        {
          "type": "api",
          "target": "api.rarible.com"
        },
        {
          "type": "website",
          "target": "beta.rarible.com"
        },
        {
          "type": "website",
          "target": "data.rarible.com"
        },
        {
          "type": "website",
          "target": "fs.rarible.com"
        },
        {
          "type": "website",
          "target": "links.rarible.com"
        },
        {
          "type": "website",
          "target": "log.rarible.com"
        },
        {
          "type": "website",
          "target": "logging.rarible.com"
        },
        {
          "type": "website",
          "target": "rarible.com"
        },
        {
          "type": "website",
          "target": "static.rarible.com"
        },
        {
          "type": "website",
          "target": "temp.rarible.com"
        },
        {
          "type": "website",
          "target": "test.rarible.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "docs.rarible.com"
        },
        {
          "type": "website",
          "target": "feedback.rarible.com"
        },
        {
          "type": "website",
          "target": "guide.rarible.com"
        },
        {
          "type": "website",
          "target": "img.rarible.com"
        },
        {
          "type": "website",
          "target": "vote.rarible.com"
        }
      ]
    }
  },
  {
    "name": "Rec Room Video Games",
    "url": "https://bugcrowd.com/recroom-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Android"
        },
        {
          "type": "other",
          "target": "Oculus Quest: All-in-one gaming system for VR"
        },
        {
          "type": "other",
          "target": "Oculus Rift: VR headset"
        },
        {
          "type": "other",
          "target": "PlayStation 4"
        },
        {
          "type": "other",
          "target": "PlayStation 5"
        },
        {
          "type": "other",
          "target": "Rec Room PC Standalone App"
        },
        {
          "type": "other",
          "target": "Steam: PC Game for Windows"
        },
        {
          "type": "other",
          "target": "Xbox"
        },
        {
          "type": "api",
          "target": "https://*.rec.net/*"
        },
        {
          "type": "api",
          "target": "https://api.rec.net/"
        },
        {
          "type": "website",
          "target": "https://rec.net/"
        },
        {
          "type": "ios",
          "target": "iOS"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Redox",
    "url": "https://bugcrowd.com/redox",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "10x.redoxengine.com"
        },
        {
          "type": "website",
          "target": "https://docs.redoxengine.com/"
        },
        {
          "type": "website",
          "target": "https://explore.redoxengine.com/"
        },
        {
          "type": "website",
          "target": "https://fhir.redoxengine.com/"
        },
        {
          "type": "website",
          "target": "https://help.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://test-pointclickcare.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://testapi.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://testblob.redoxengine.com/upload"
        },
        {
          "type": "api",
          "target": "https://testcarequality.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://testclientcert.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://testflatfileparser.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://webhooks10x.redoxengine.com"
        },
        {
          "type": "website",
          "target": "https://www.redoxengine.com/"
        },
        {
          "type": "api",
          "target": "testapp.redoxengine.com"
        },
        {
          "type": "api",
          "target": "testftp.redoxengine.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Contact forms on https://www.redoxengine.com"
        },
        {
          "type": "api",
          "target": "api.redoxengine.com"
        },
        {
          "type": "api",
          "target": "candi.redoxengine.com"
        },
        {
          "type": "api",
          "target": "https://api.segment.io"
        },
        {
          "type": "website",
          "target": "https://dashboard.redoxengine.com/"
        },
        {
          "type": "website",
          "target": "https://docs.redoxengine.com/feedback"
        },
        {
          "type": "website",
          "target": "https://jobs.lever.co/redoxengine/"
        },
        {
          "type": "other",
          "target": "https://redox.slack.com"
        },
        {
          "type": "website",
          "target": "https://sso.redoxengine.com"
        }
      ]
    }
  },
  {
    "name": "Regions Bank Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/regions-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " *.firststerling.com"
        },
        {
          "type": "website",
          "target": "*.clearsightadvisors.com"
        },
        {
          "type": "website",
          "target": "*.enerbank.com"
        },
        {
          "type": "website",
          "target": "*.regions.com"
        },
        {
          "type": "website",
          "target": "*.regions.us"
        },
        {
          "type": "website",
          "target": "*.regions6x.com"
        },
        {
          "type": "website",
          "target": "*.regionsapps.com"
        },
        {
          "type": "website",
          "target": "*.regionsdev.com"
        },
        {
          "type": "website",
          "target": "*.regionsmortgage.com"
        },
        {
          "type": "website",
          "target": "*.regionsqa.com"
        },
        {
          "type": "website",
          "target": "*.regionsretirement.com"
        },
        {
          "type": "website",
          "target": "*.regionssource.com"
        },
        {
          "type": "website",
          "target": "*.rgbk.com"
        },
        {
          "type": "website",
          "target": "*.sabal.com"
        },
        {
          "type": "website",
          "target": "https://*.regions.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Registrar.gov: Bug Bounty Program",
    "url": "https://bugcrowd.com/registrar-dotgov",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://domains.dotgov.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Railroad Retirement Board - Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/rrb-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.rrb.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Santos Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/santos-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "103.196.194.0/24"
        },
        {
          "type": "other",
          "target": "103.199.96.0/24"
        },
        {
          "type": "other",
          "target": "103.199.96.128/27"
        },
        {
          "type": "other",
          "target": "103.199.96.192/29"
        },
        {
          "type": "other",
          "target": "103.199.96.200/29"
        },
        {
          "type": "other",
          "target": "103.199.96.220/30"
        },
        {
          "type": "other",
          "target": "103.199.96.236/30"
        },
        {
          "type": "other",
          "target": "103.199.96.244/30"
        },
        {
          "type": "other",
          "target": "103.252.190.0/24"
        },
        {
          "type": "other",
          "target": "103.54.238.0/23"
        },
        {
          "type": "other",
          "target": "103.55.32.0/24"
        },
        {
          "type": "other",
          "target": "103.6.116.0/24"
        },
        {
          "type": "other",
          "target": "121.200.234.0/29"
        },
        {
          "type": "other",
          "target": "13.70.109.59"
        },
        {
          "type": "other",
          "target": "13.73.192.151"
        },
        {
          "type": "other",
          "target": "13.75.189.223"
        },
        {
          "type": "other",
          "target": "192.84.89.0/24"
        },
        {
          "type": "other",
          "target": "203.0.2.0/23"
        },
        {
          "type": "other",
          "target": "45.115.48.0/24"
        },
        {
          "type": "other",
          "target": "45.115.48.5/32"
        },
        {
          "type": "other",
          "target": "52.243.79.77"
        },
        {
          "type": "other",
          "target": "52.255.37.39"
        },
        {
          "type": "website",
          "target": "santos.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Seagate VDP",
    "url": "https://bugcrowd.com/seagate-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.seagate.com"
        },
        {
          "type": "api",
          "target": "api.seagate.com"
        },
        {
          "type": "api",
          "target": "apistore.seagate.com"
        },
        {
          "type": "api",
          "target": "apps1.seagate.com"
        },
        {
          "type": "website",
          "target": "appstore-us.seagate.com"
        },
        {
          "type": "website",
          "target": "appstore.seagate.com"
        },
        {
          "type": "website",
          "target": "blog.lacie.com"
        },
        {
          "type": "website",
          "target": "blog.seagate.com"
        },
        {
          "type": "website",
          "target": "blogext.seagate.com"
        },
        {
          "type": "website",
          "target": "bloglacieext.seagate.com"
        },
        {
          "type": "website",
          "target": "branding.seagate.com/"
        },
        {
          "type": "website",
          "target": "charitychina.seagate.com"
        },
        {
          "type": "website",
          "target": "codereview.seagate.com"
        },
        {
          "type": "website",
          "target": "collective.lacie.com"
        },
        {
          "type": "website",
          "target": "computex.seagate.com"
        },
        {
          "type": "website",
          "target": "datapulse.seagate.com"
        },
        {
          "type": "website",
          "target": "drivetrust.seagate.com"
        },
        {
          "type": "website",
          "target": "eapps.seagate.com"
        },
        {
          "type": "website",
          "target": "embargoed.seagate.com"
        },
        {
          "type": "website",
          "target": "fs1.sts.seagate.com"
        },
        {
          "type": "website",
          "target": "http://solo.seagate.com/"
        },
        {
          "type": "website",
          "target": "intelligent.media.seagate.com"
        },
        {
          "type": "website",
          "target": "is.seagate.com"
        },
        {
          "type": "website",
          "target": "jira.corp.lyveminds.com"
        },
        {
          "type": "website",
          "target": "jts-ce.seagate.com"
        },
        {
          "type": "website",
          "target": "jts.seagate.com"
        },
        {
          "type": "website",
          "target": "jtslco.seagate.com"
        },
        {
          "type": "website",
          "target": "labs.seagate.com"
        },
        {
          "type": "website",
          "target": "lacie.com"
        },
        {
          "type": "website",
          "target": "lyvedogfood.seagate.com"
        },
        {
          "type": "website",
          "target": "lyveint.seagate.com"
        },
        {
          "type": "website",
          "target": "lyvetst.seagate.com"
        },
        {
          "type": "website",
          "target": "mapps.seagate.com"
        },
        {
          "type": "website",
          "target": "maxtor.seagate.com"
        },
        {
          "type": "website",
          "target": "meterserver.seagate.com"
        },
        {
          "type": "website",
          "target": "mybenefits.seagate.com"
        },
        {
          "type": "website",
          "target": "mypayroll.seagate.com"
        },
        {
          "type": "website",
          "target": "myportal.seagate.com"
        },
        {
          "type": "website",
          "target": "nassupport.seagate.com"
        },
        {
          "type": "website",
          "target": "partnerreg.seagate.com"
        },
        {
          "type": "website",
          "target": "pia.seagate.com"
        },
        {
          "type": "website",
          "target": "plm.dothill.com"
        },
        {
          "type": "website",
          "target": "portal-us.seagate.com"
        },
        {
          "type": "website",
          "target": "realtime-ext.okla.seagate.com"
        },
        {
          "type": "website",
          "target": "sca.seagate.com"
        },
        {
          "type": "website",
          "target": "seagate.com"
        },
        {
          "type": "website",
          "target": "seagategov.seagate.com"
        },
        {
          "type": "website",
          "target": "secureauth.sing.seagate.com"
        },
        {
          "type": "website",
          "target": "sftp.seagate.com"
        },
        {
          "type": "website",
          "target": "sftptest.seagate.com"
        },
        {
          "type": "website",
          "target": "sgbenefit.seagate.com"
        },
        {
          "type": "website",
          "target": "sgmedical.seagate.com"
        },
        {
          "type": "website",
          "target": "sgpayroll.seagate.com"
        },
        {
          "type": "website",
          "target": "solo-beta.seagate.com"
        },
        {
          "type": "website",
          "target": "solo.sing.seagate.com"
        },
        {
          "type": "website",
          "target": "ssl.seagate.com"
        },
        {
          "type": "website",
          "target": "tableauonline.seagate.com"
        },
        {
          "type": "website",
          "target": "verify.seagate.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SEEK",
    "url": "https://bugcrowd.com/seek",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.aips-internal.com"
        },
        {
          "type": "website",
          "target": "*.certsy.com"
        },
        {
          "type": "website",
          "target": "*.certsynonprod.com"
        },
        {
          "type": "api",
          "target": "*.jobapi.io"
        },
        {
          "type": "api",
          "target": "*.jobapi.net"
        },
        {
          "type": "website",
          "target": "*.outfra.xyz"
        },
        {
          "type": "website",
          "target": "*.seek.com"
        },
        {
          "type": "website",
          "target": "*.seek.com.au"
        },
        {
          "type": "website",
          "target": "*.skinfra.xyz"
        },
        {
          "type": "api",
          "target": "*.sol-data.com"
        },
        {
          "type": "android",
          "target": "SEEK mobile app for Android"
        },
        {
          "type": "ios",
          "target": "SEEK mobile app for iOS"
        },
        {
          "type": "api",
          "target": "auth.seek.com"
        },
        {
          "type": "api",
          "target": "graphql.seek.com"
        },
        {
          "type": "other",
          "target": "https://seekcdn.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Service NSW Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/service-nsw-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*service.nsw.gov.au"
        },
        {
          "type": "api",
          "target": "api.service.nsw.gov.au"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.nsw.gov.au"
        }
      ]
    }
  },
  {
    "name": "1Shoppingcart.com",
    "url": "https://bugcrowd.com/shoppingcart",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.mcssl.com"
        },
        {
          "type": "website",
          "target": "1shoppingcart.com"
        },
        {
          "type": "api",
          "target": "http://mcssl.com/api"
        },
        {
          "type": "website",
          "target": "mcssl.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.1shoppingcart.com"
        }
      ]
    }
  },
  {
    "name": "Sisu Data",
    "url": "https://bugcrowd.com/sisu",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://sisudata.com"
        },
        {
          "type": "website",
          "target": "https://vip.sisu.ai"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Skroutz Public Managed Bug Bounty",
    "url": "https://bugcrowd.com/skroutz",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://www.skroutz.gr/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Sky Disclosure Program",
    "url": "https://bugcrowd.com/sky-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "All internet facing Sky assets"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Skyscanner",
    "url": "https://bugcrowd.com/skyscanner",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 8000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.skyscanner.net"
        },
        {
          "type": "android",
          "target": "Skyscanner Android App"
        },
        {
          "type": "ios",
          "target": "Skyscanner iOS App"
        },
        {
          "type": "api",
          "target": "gateway.skyscanner.net/*"
        },
        {
          "type": "website",
          "target": "partnerportal.skyscanner.net/*"
        },
        {
          "type": "website",
          "target": "skyscanner.net/*"
        },
        {
          "type": "website",
          "target": "skyscanner.net/hotels/book/*"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "Corporate Email (*@skyscanner.net)"
        }
      ]
    }
  },
  {
    "name": "Smartmockups",
    "url": "https://bugcrowd.com/smartmockups",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.smartmockups.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SmartThings Vulnerability Disclosure",
    "url": "https://bugcrowd.com/smartthings",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "SmartThings Graph Console"
        },
        {
          "type": "iot",
          "target": "SmartThings Hub"
        },
        {
          "type": "android",
          "target": "SmartThings Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "SmartThings Mobile Application for iOS"
        },
        {
          "type": "api",
          "target": "SmartThings Rest APIs"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SnapNames",
    "url": "https://bugcrowd.com/snapnames",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://snapnames.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "SnapNames VDP",
    "url": "https://bugcrowd.com/snapnames-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.snapnames.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Sophos",
    "url": "https://bugcrowd.com/sophos",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 50000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.astaro.com"
        },
        {
          "type": "website",
          "target": "*.cyberoam.com"
        },
        {
          "type": "other",
          "target": "*.hitmanpro.com"
        },
        {
          "type": "other",
          "target": "*.reflexion.net"
        },
        {
          "type": "other",
          "target": "*.sophos.com"
        },
        {
          "type": "other",
          "target": "Any Other Sophos Product or Service"
        },
        {
          "type": "other",
          "target": "Intercept X Endpoint"
        },
        {
          "type": "website",
          "target": "Sophos Central"
        },
        {
          "type": "other",
          "target": "XG Firewall"
        },
        {
          "type": "iot",
          "target": "XG Firewall - Pre-auth RCE"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.ddns.cyberoam.com"
        },
        {
          "type": "website",
          "target": "*.releaseportal.cyberoam.com"
        },
        {
          "type": "website",
          "target": "*eventreg.sophos.com"
        },
        {
          "type": "other",
          "target": "SPF/DKIM/DMARC issues"
        },
        {
          "type": "website",
          "target": "app.reflexion.net"
        },
        {
          "type": "other",
          "target": "autodiscover.hitmanpro.com"
        },
        {
          "type": "website",
          "target": "community.sophos.com"
        },
        {
          "type": "website",
          "target": "events.sophos.com"
        },
        {
          "type": "other",
          "target": "lyncdiscover.hitmanpro.com"
        },
        {
          "type": "website",
          "target": "mev.hitmanpro.com"
        },
        {
          "type": "other",
          "target": "shop.hitmanpro.com"
        },
        {
          "type": "other",
          "target": "sip.hitmanpro.com"
        },
        {
          "type": "website",
          "target": "sophos.atlassian.net (Public service desk)"
        },
        {
          "type": "other",
          "target": "support.hitmanpro.com"
        },
        {
          "type": "website",
          "target": "surveys.sophos.com"
        },
        {
          "type": "website",
          "target": "tickets.reflexion.net"
        }
      ]
    }
  },
  {
    "name": "SoundCloud",
    "url": "https://bugcrowd.com/soundcloud",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.s-cloud.net"
        },
        {
          "type": "api",
          "target": "*.services.repostnetwork.com"
        },
        {
          "type": "api",
          "target": "*.soundcloud.com"
        },
        {
          "type": "website",
          "target": "*.soundcloud.org"
        },
        {
          "type": "android",
          "target": "SoundCloud Android app"
        },
        {
          "type": "ios",
          "target": "SoundCloud iOS app"
        },
        {
          "type": "website",
          "target": "http://artists.soundcloud.com/"
        },
        {
          "type": "website",
          "target": "soundcloud.com"
        },
        {
          "type": "website",
          "target": "soundcloud.org"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": " community.soundcloud.com"
        },
        {
          "type": "website",
          "target": "advertising.soundcloud.com"
        },
        {
          "type": "website",
          "target": "blog.soundcloud.com"
        },
        {
          "type": "website",
          "target": "contest.soundcloud.com"
        },
        {
          "type": "website",
          "target": "copyright.soundcloud.com"
        },
        {
          "type": "website",
          "target": "help.soundcloud.com"
        },
        {
          "type": "website",
          "target": "jobs.soundcloud.com"
        },
        {
          "type": "website",
          "target": "playback.soundcloud.com"
        },
        {
          "type": "website",
          "target": "playerone.soundcloud.com"
        },
        {
          "type": "website",
          "target": "press.soundcloud.com"
        },
        {
          "type": "website",
          "target": "promote.soundcloud.com"
        },
        {
          "type": "website",
          "target": "scdrops.soundcloud.com"
        },
        {
          "type": "other",
          "target": "soundcloudmail.com"
        },
        {
          "type": "website",
          "target": "status.soundcloud.com"
        }
      ]
    }
  },
  {
    "name": "SpaceX/Starlink",
    "url": "https://bugcrowd.com/spacex",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 25000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "SpaceX and Starlink assets (target information and rewards detailed above on the brief)"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Sportradar VDP Pro",
    "url": "https://bugcrowd.com/sportradar-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://www.sportradar.com/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Sprout Social",
    "url": "https://bugcrowd.com/sproutsocial",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Sprout Social for Android"
        },
        {
          "type": "ios",
          "target": "Sprout Social for iOS"
        },
        {
          "type": "api",
          "target": "api.sproutsocial.com"
        },
        {
          "type": "website",
          "target": "app.sproutsocial.com"
        },
        {
          "type": "api",
          "target": "app.sproutsocial.com/api"
        },
        {
          "type": "api",
          "target": "cms.sproutsocial.com/mktapi"
        },
        {
          "type": "website",
          "target": "getbambu.com"
        },
        {
          "type": "website",
          "target": "media.sproutsocial.com"
        },
        {
          "type": "website",
          "target": "share.sproutsocial.com"
        },
        {
          "type": "website",
          "target": "sprout.link"
        },
        {
          "type": "website",
          "target": "sproutsocial.com"
        },
        {
          "type": "website",
          "target": "sproutsocial.com/adapt/"
        },
        {
          "type": "website",
          "target": "sproutsocial.com/es/"
        },
        {
          "type": "website",
          "target": "sproutsocial.com/insights"
        },
        {
          "type": "website",
          "target": "sproutsocial.com/pt/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.sproutsocial.com/wp-includes"
        },
        {
          "type": "other",
          "target": "Anything that CNAMEs to a third party"
        },
        {
          "type": "website",
          "target": "jobboard.sproutsocial.com"
        },
        {
          "type": "website",
          "target": "pagely.sproutsocial.com"
        },
        {
          "type": "website",
          "target": "sproutsocial.com/wp-includes"
        }
      ]
    }
  },
  {
    "name": "Square",
    "url": "https://bugcrowd.com/square",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 15000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.square.com"
        },
        {
          "type": "other",
          "target": "*.squareup.com"
        },
        {
          "type": "android",
          "target": "Square Point of Sale Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "Square Point of Sale Mobile Application for iOS"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.cash.me"
        },
        {
          "type": "website",
          "target": "Any vulnerabilities found in Third-party software"
        },
        {
          "type": "android",
          "target": "Cash App Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "Cash App Mobile Application for iOS"
        }
      ]
    }
  },
  {
    "name": "Square Open Source",
    "url": "https://bugcrowd.com/squareopensource",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://github.com/square/ghostunnel"
        },
        {
          "type": "other",
          "target": "https://github.com/square/git-fastclone"
        },
        {
          "type": "other",
          "target": "https://github.com/square/go-jose"
        },
        {
          "type": "other",
          "target": "https://github.com/square/js-jose"
        },
        {
          "type": "other",
          "target": "https://github.com/square/keysync"
        },
        {
          "type": "other",
          "target": "https://github.com/square/keywhiz"
        },
        {
          "type": "other",
          "target": "https://github.com/square/keywhiz-fs"
        },
        {
          "type": "other",
          "target": "https://github.com/square/okhttp"
        },
        {
          "type": "other",
          "target": "https://github.com/square/okio"
        },
        {
          "type": "other",
          "target": "https://github.com/square/pam_krb_cache"
        },
        {
          "type": "other",
          "target": "https://github.com/square/rails-auth"
        },
        {
          "type": "other",
          "target": "https://github.com/square/retrofit"
        },
        {
          "type": "other",
          "target": "https://github.com/square/squalor"
        },
        {
          "type": "other",
          "target": "https://github.com/square/sudo_pair"
        },
        {
          "type": "other",
          "target": "https://github.com/square/valet"
        },
        {
          "type": "other",
          "target": "https://github.com/square/wire"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "StackPath",
    "url": "https://bugcrowd.com/stackpath",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "*.highwinds.com - Any host or services"
        },
        {
          "type": "other",
          "target": "*.maxcdn.com - Any host or services"
        },
        {
          "type": "other",
          "target": "*.maxcdn.net  - Any host or services"
        },
        {
          "type": "other",
          "target": "*.serverdensity.com - Any host or services"
        },
        {
          "type": "other",
          "target": "*.stackpath.com - Any host or services"
        },
        {
          "type": "other",
          "target": "*.stackpath.dev - Any host or services"
        },
        {
          "type": "other",
          "target": "*.stackpath.net - Any host or services"
        },
        {
          "type": "other",
          "target": "<your-instance>.serverdensity.io"
        },
        {
          "type": "other",
          "target": "Any host owned by StackPath"
        },
        {
          "type": "other",
          "target": "Any product/service offered by StackPath"
        },
        {
          "type": "website",
          "target": "control.stackpath.com"
        },
        {
          "type": "website",
          "target": "cp.maxcdn.com"
        },
        {
          "type": "website",
          "target": "login.serverdensity.io"
        },
        {
          "type": "website",
          "target": "striketracker.highwinds.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "*.hwcdn.net"
        },
        {
          "type": "other",
          "target": "*.stackpathdns.com"
        },
        {
          "type": "website",
          "target": "*.stackpathedge.net"
        },
        {
          "type": "other",
          "target": "<customer>.serverdensity.com"
        },
        {
          "type": "website",
          "target": "store.stackpath.com"
        }
      ]
    }
  },
  {
    "name": "State Farm VDP",
    "url": "https://bugcrowd.com/statefarm-esf",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "State Farm Drive Safe and Save Mobile Application (Android)"
        },
        {
          "type": "ios",
          "target": "State Farm Drive Safe and Save Mobile Application (iOS)"
        },
        {
          "type": "android",
          "target": "State Farm Steer Clear Mobile Application (Android)"
        },
        {
          "type": "ios",
          "target": "State Farm Steer Clear Mobile Application (iOS)"
        },
        {
          "type": "website",
          "target": "www.statefarm.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Statuspage",
    "url": "https://bugcrowd.com/statuspage",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.statuspage.io"
        },
        {
          "type": "website",
          "target": "manage.statuspage.io"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Stellantis",
    "url": "https://bugcrowd.com/stellantis",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 7500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Vehicle Head Units, TPMS sensors, remote keyless entry, and any other system that is present in a hardware product that you own or are authorized to test against"
        },
        {
          "type": "ios",
          "target": "https://itunes.apple.com/gb/app/uconnect-live/id881830261?mt=8"
        },
        {
          "type": "ios",
          "target": "https://itunes.apple.com/pl/app/panda-uconnect/id1117321678?mt=8"
        },
        {
          "type": "ios",
          "target": "https://itunes.apple.com/us/app/uconnect/id1229236724?mt=8"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.acn.uc&hl=en"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.fcagroup.us.uconnect"
        },
        {
          "type": "website",
          "target": "www.driveuconnect.com"
        },
        {
          "type": "website",
          "target": "www.driveuconnect.eu"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any host/web property or products verified to be owned by Stellantis (domains/IP space/etc.) but not listed in Primary targets."
        }
      ]
    }
  },
  {
    "name": "Step Public Applications",
    "url": "https://bugcrowd.com/step-public",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "Step Android App"
        },
        {
          "type": "ios",
          "target": "Step iOS app"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Stiltsoft",
    "url": "https://bugcrowd.com/stiltsoft",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1210766/teamcity-integration-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1210934/awesome-graphs-for-bitbucket?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1210934/awesome-graphs-for-bitbucket?hosting=datacenter"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1210934/awesome-graphs-for-bitbucket?hosting=server"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1212507/smart-attachments-for-jira?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1212531/customer-case-jira-support-feedback?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1214110/courses-and-quizzes-lms-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1214971/handy-macros-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1222001/employee-performance-ratings?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1222084/spreadsheet-issue-field-editor?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/1222102/webhook-manager-for-confluence-cloud?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/27447/table-filter-and-charts-for-confluence?hosting=cloud"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/27447/table-filter-and-charts-for-confluence?hosting=datacenter"
        },
        {
          "type": "website",
          "target": "https://marketplace.atlassian.com/apps/27447/table-filter-and-charts-for-confluence?hosting=server"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.atlassian.com"
        }
      ]
    }
  },
  {
    "name": "Stryker",
    "url": "https://bugcrowd.com/stryker-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "All public facing Stryker assets "
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Takeaway.com",
    "url": "https://bugcrowd.com/takeaway",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.10bis.co.il"
        },
        {
          "type": "website",
          "target": "*.bistro.sk"
        },
        {
          "type": "website",
          "target": "*.citymeal.com"
        },
        {
          "type": "website",
          "target": "*.eat.ch"
        },
        {
          "type": "website",
          "target": "*.just-eat.dk"
        },
        {
          "type": "website",
          "target": "*.just-eat.fr"
        },
        {
          "type": "website",
          "target": "*.just-eat.no"
        },
        {
          "type": "website",
          "target": "*.justeattakeaway.com"
        },
        {
          "type": "website",
          "target": "*.lieferando.at"
        },
        {
          "type": "website",
          "target": "*.lieferando.de"
        },
        {
          "type": "website",
          "target": "*.pyszne.pl"
        },
        {
          "type": "website",
          "target": "*.scoober.com"
        },
        {
          "type": "website",
          "target": "*.takeaway.com"
        },
        {
          "type": "website",
          "target": "*.thuisbezorgd.nl"
        },
        {
          "type": "website",
          "target": "*.yourdelivery.de"
        },
        {
          "type": "website",
          "target": "atarkasher.co.il"
        },
        {
          "type": "website",
          "target": "brand.takeaway.com"
        },
        {
          "type": "website",
          "target": "careers.takeaway.com"
        },
        {
          "type": "website",
          "target": "cloud.*.*.*"
        },
        {
          "type": "website",
          "target": "dev.takeaway.com/html/"
        },
        {
          "type": "website",
          "target": "https://*.takeawayriders.com/ "
        },
        {
          "type": "ios",
          "target": "https://itunes.apple.com/us/app/lieferando-de/id419724490?l=es&mt=8"
        },
        {
          "type": "android",
          "target": "https://play.google.com/store/apps/details?id=com.yopeso.lieferando&hl=en_US"
        },
        {
          "type": "website",
          "target": "https://status-takeaway.com/status."
        },
        {
          "type": "api",
          "target": "https://takeawaypay-internal-api-ase.tenbis-ase.p.azurewebsites.net/"
        },
        {
          "type": "website",
          "target": "https://takeawaypay.azurefd.net/en/takeawaypay/"
        },
        {
          "type": "api",
          "target": "https://takeawaypayapi-ase.tenbis-ase.p.azurewebsites.net/api"
        },
        {
          "type": "website",
          "target": "https://www.justeat.it/rider"
        },
        {
          "type": "website",
          "target": "https://www.lieferando.de/thetakeaway/"
        },
        {
          "type": "website",
          "target": "intranet.takeaway.com"
        },
        {
          "type": "website",
          "target": "newsletter.thuisbezorgd.nl"
        },
        {
          "type": "api",
          "target": "restaurant-api.takeaway.com"
        },
        {
          "type": "website",
          "target": "shop.thuisbezorgd.nl"
        },
        {
          "type": "website",
          "target": "static.thuisbezorgd.nl"
        },
        {
          "type": "website",
          "target": "tv.takeaway.com"
        },
        {
          "type": "website",
          "target": "www.status-takeaway.com/status"
        },
        {
          "type": "website",
          "target": "www.takeaway.com/deals"
        },
        {
          "type": "website",
          "target": "www.takeaway.com/drivers"
        },
        {
          "type": "website",
          "target": "www.takeaway.com/foodwiki/"
        },
        {
          "type": "website",
          "target": "www.thuisbezorgd.nl/aanmelden"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://www.lieferando.at/en/vouchercode/new-customer"
        },
        {
          "type": "website",
          "target": "https://www.lieferando.at/gutschein/neukunde"
        },
        {
          "type": "website",
          "target": "www.integration-takeaway.com"
        }
      ]
    }
  },
  {
    "name": "Tamedia",
    "url": "https://bugcrowd.com/tamedia",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://www.24heures.ch"
        },
        {
          "type": "website",
          "target": "https://www.bazonline.ch"
        },
        {
          "type": "website",
          "target": "https://www.berneroberlaender.ch"
        },
        {
          "type": "website",
          "target": "https://www.bernerzeitung.ch"
        },
        {
          "type": "website",
          "target": "https://www.derbund.ch"
        },
        {
          "type": "website",
          "target": "https://www.landbote.ch"
        },
        {
          "type": "website",
          "target": "https://www.langenthalertagblatt.ch"
        },
        {
          "type": "website",
          "target": "https://www.tagesanzeiger.ch"
        },
        {
          "type": "website",
          "target": "https://www.tdg.ch"
        },
        {
          "type": "website",
          "target": "https://www.thunertagblatt.ch"
        },
        {
          "type": "website",
          "target": "https://www.zsz.ch"
        },
        {
          "type": "website",
          "target": "https://www.zuonline.ch"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "DMARC, SPF, DKIM"
        },
        {
          "type": "other",
          "target": "Subdomain Takeover "
        },
        {
          "type": "website",
          "target": "https://abo.inscopedomain.ch"
        },
        {
          "type": "website",
          "target": "https://auth.inscopedomain.ch/"
        },
        {
          "type": "website",
          "target": "https://login.inscopedomain.ch/"
        },
        {
          "type": "website",
          "target": "https://shop.inscopedomain.ch/"
        },
        {
          "type": "website",
          "target": "https://tgt.inscopedomain.ch/"
        }
      ]
    }
  },
  {
    "name": "Telefónica Germany",
    "url": "https://bugcrowd.com/telefonicavdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.alditalk-kundenbetreuung.de"
        },
        {
          "type": "website",
          "target": "*.ayyildiz.de"
        },
        {
          "type": "website",
          "target": "*.base.de"
        },
        {
          "type": "website",
          "target": "*.blau.de"
        },
        {
          "type": "website",
          "target": "*.einfachprepaid.de"
        },
        {
          "type": "website",
          "target": "*.epos.vertriebspartner.de.o2.com"
        },
        {
          "type": "website",
          "target": "*.fonic-mobile.de"
        },
        {
          "type": "website",
          "target": "*.fonic.de"
        },
        {
          "type": "website",
          "target": "*.mediamarkt.o2service.de"
        },
        {
          "type": "website",
          "target": "*.mein.aetkasmart.de"
        },
        {
          "type": "website",
          "target": "*.mein.simfinity.de"
        },
        {
          "type": "website",
          "target": "*.nettokom.de"
        },
        {
          "type": "website",
          "target": "*.netzclub.net"
        },
        {
          "type": "website",
          "target": "*.norma-mobil.de"
        },
        {
          "type": "website",
          "target": "*.nova-mobil.de"
        },
        {
          "type": "website",
          "target": "*.o2.de"
        },
        {
          "type": "website",
          "target": "*.o2business.de"
        },
        {
          "type": "website",
          "target": "*.o2online.de"
        },
        {
          "type": "website",
          "target": "*.o2service.de"
        },
        {
          "type": "website",
          "target": "*.o2spin.de"
        },
        {
          "type": "website",
          "target": "*.ortelmobile.de"
        },
        {
          "type": "website",
          "target": "*.saturn.o2service.de"
        },
        {
          "type": "website",
          "target": "*.sim-karte-aktivierung.blauworld.de"
        },
        {
          "type": "website",
          "target": "*.telefonica.de"
        },
        {
          "type": "website",
          "target": "*.turkei-sim.de"
        },
        {
          "type": "website",
          "target": "*.whatsappsim.de"
        },
        {
          "type": "android",
          "target": "Mein O2 Android Application"
        },
        {
          "type": "ios",
          "target": "Mein O2 iOS Application"
        },
        {
          "type": "android",
          "target": "O2 Business Android Application"
        },
        {
          "type": "ios",
          "target": "O2 Business iOS Application"
        },
        {
          "type": "android",
          "target": "PartOS Android Application "
        },
        {
          "type": "ios",
          "target": "PartOS iOS Application "
        },
        {
          "type": "website",
          "target": "https://vertriebspartner.de.o2.com/partos"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.k-classic-mobil.de"
        },
        {
          "type": "website",
          "target": "*.pool.telefonica.de "
        },
        {
          "type": "website",
          "target": "https://mobilfunk.tchibo.de"
        },
        {
          "type": "website",
          "target": "https://www.alditalk.de"
        },
        {
          "type": "website",
          "target": "https://www.think-big.org"
        },
        {
          "type": "website",
          "target": "https://www.udldigital.de"
        },
        {
          "type": "website",
          "target": "https://www.wayra.co.uk"
        }
      ]
    }
  },
  {
    "name": "Telstra VDP",
    "url": "https://bugcrowd.com/telstra-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "My Telstra Android App"
        },
        {
          "type": "ios",
          "target": "My Telstra iOS app"
        },
        {
          "type": "api",
          "target": "Telstra APIs"
        },
        {
          "type": "website",
          "target": "https://purple.telstra.com/"
        },
        {
          "type": "website",
          "target": "https://www.telstra.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.telstra.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "*.mobile.telstra.com"
        }
      ]
    }
  },
  {
    "name": "Tesla",
    "url": "https://bugcrowd.com/tesla",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 15000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.solarcity.com"
        },
        {
          "type": "website",
          "target": "*.tesla.cn"
        },
        {
          "type": "website",
          "target": "*.tesla.com"
        },
        {
          "type": "website",
          "target": "*.tesla.services"
        },
        {
          "type": "website",
          "target": "*.teslainsuranceservices.com"
        },
        {
          "type": "website",
          "target": "*.teslamotors.com"
        },
        {
          "type": "hardware",
          "target": "A hardware product that you own or are authorized to test against (Vehicle/PowerWall/etc.)"
        },
        {
          "type": "website",
          "target": "Any host verified to be owned by Tesla Motors Inc. (domains/IP space/etc.)"
        },
        {
          "type": "android",
          "target": "Official Tesla Android apps"
        },
        {
          "type": "ios",
          "target": "Official Tesla iOS apps"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any domains from acquisitions, such as maxwell.com"
        },
        {
          "type": "website",
          "target": "Any other third-party websites hosted by non-Tesla entities"
        },
        {
          "type": "website",
          "target": "employeefeedback.tesla.com"
        },
        {
          "type": "website",
          "target": "energysupport.tesla.com (you can report vulnerabilities to bugbounty.zoho.com)"
        },
        {
          "type": "website",
          "target": "engage.tesla.com"
        },
        {
          "type": "website",
          "target": "feedback.tesla.com"
        },
        {
          "type": "website",
          "target": "feedback.teslamotors.com"
        },
        {
          "type": "website",
          "target": "ir.tesla.com"
        },
        {
          "type": "website",
          "target": "ir.teslamotors.com"
        },
        {
          "type": "website",
          "target": "mkto.teslamotors.com"
        },
        {
          "type": "website",
          "target": "shop.eu.teslamotors.com"
        }
      ]
    }
  },
  {
    "name": "The Scotts Miracle-Gro Company Responsible Disclosure",
    "url": "https://bugcrowd.com/thescottsmiraclerd",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.aerogarden.com"
        },
        {
          "type": "website",
          "target": "*.blackmagic.com"
        },
        {
          "type": "website",
          "target": "*.bonniecabbageprogram.com"
        },
        {
          "type": "website",
          "target": "*.bonnieplants.ca"
        },
        {
          "type": "website",
          "target": "*.bonnieplants.com"
        },
        {
          "type": "website",
          "target": "*.ecoscraps.com"
        },
        {
          "type": "website",
          "target": "*.getbarkyard.com"
        },
        {
          "type": "website",
          "target": "*.hawthorne-gardening.com"
        },
        {
          "type": "website",
          "target": "*.hawthornegc.com"
        },
        {
          "type": "website",
          "target": "*.justknockknock.com"
        },
        {
          "type": "website",
          "target": "*.lunarly.com"
        },
        {
          "type": "website",
          "target": "*.miraclegro.com"
        },
        {
          "type": "website",
          "target": "*.miraclegrotwelve.com"
        },
        {
          "type": "website",
          "target": "*.mother-earthproducts.com"
        },
        {
          "type": "website",
          "target": "*.myblossom.com"
        },
        {
          "type": "website",
          "target": "*.mygro.com"
        },
        {
          "type": "website",
          "target": "*.naturescare.com"
        },
        {
          "type": "website",
          "target": "*.ortho.com"
        },
        {
          "type": "website",
          "target": "*.provistaturf.com"
        },
        {
          "type": "website",
          "target": "*.rootfarm.ca"
        },
        {
          "type": "website",
          "target": "*.rootfarm.com"
        },
        {
          "type": "website",
          "target": "*.roundup.com"
        },
        {
          "type": "website",
          "target": "*.scotts.com"
        },
        {
          "type": "website",
          "target": "*.scottsbrands.com"
        },
        {
          "type": "website",
          "target": "*.scottsmiraclegro.com"
        },
        {
          "type": "website",
          "target": "*.scottsprogram.com"
        },
        {
          "type": "website",
          "target": "*.scottsrootfactory.com"
        },
        {
          "type": "website",
          "target": "*.shopgreendigs.com"
        },
        {
          "type": "website",
          "target": "*.tanglefoot.com"
        },
        {
          "type": "website",
          "target": "*.therootfactory.com"
        },
        {
          "type": "website",
          "target": "*.tomcatbrand.com"
        },
        {
          "type": "website",
          "target": "*.weedingwisely.com/"
        },
        {
          "type": "website",
          "target": "*.whitneyfarms.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.myscotts.com"
        },
        {
          "type": "website",
          "target": "*.scottsco.com"
        }
      ]
    }
  },
  {
    "name": "ThousandEyes Bug Bounty",
    "url": "https://bugcrowd.com/thousandeyes-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "ThousandEyes Endpoint Agent "
        },
        {
          "type": "other",
          "target": "ThousandEyes Enterprise Agent"
        },
        {
          "type": "api",
          "target": "https://api.thousandeyes.com/"
        },
        {
          "type": "website",
          "target": "https://app.thousandeyes.com/"
        },
        {
          "type": "website",
          "target": "https://www.thousandeyes.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "https://blog.thousandeyes.com/"
        }
      ]
    }
  },
  {
    "name": "Trello",
    "url": "https://bugcrowd.com/trello",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.trello.services"
        },
        {
          "type": "website",
          "target": "Butler for Trello"
        },
        {
          "type": "website",
          "target": "Calendar Power-Up"
        },
        {
          "type": "website",
          "target": "Card Aging Power-Up"
        },
        {
          "type": "website",
          "target": "List Limits Power-Up"
        },
        {
          "type": "website",
          "target": "Microsoft Teams Integration"
        },
        {
          "type": "other",
          "target": "Trello Desktop Client"
        },
        {
          "type": "android",
          "target": "Trello Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "Trello Mobile App for iOS"
        },
        {
          "type": "website",
          "target": "Voting Power-Up"
        },
        {
          "type": "website",
          "target": "api.trello.com"
        },
        {
          "type": "website",
          "target": "trello.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "First party (made-by-trello) power-ups other than those inscope are excluded from this program but can be reported to http://bugcrowd.com/atlassianapps"
        },
        {
          "type": "website",
          "target": "e.trello.com"
        },
        {
          "type": "website",
          "target": "help.trello.com"
        },
        {
          "type": "website",
          "target": "trello-attachments.s3.amazonaws.com"
        }
      ]
    }
  },
  {
    "name": "TripAdvisor",
    "url": "https://bugcrowd.com/tripadvisor-bb-og",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.bokundemo.com"
        },
        {
          "type": "website",
          "target": "*.bokuntest.com"
        },
        {
          "type": "website",
          "target": "*.flipkey.com"
        },
        {
          "type": "website",
          "target": "*.holidaylettings.com"
        },
        {
          "type": "website",
          "target": "*.housetrip.com"
        },
        {
          "type": "website",
          "target": "*.niumba.com"
        },
        {
          "type": "website",
          "target": "*.vacationhomerentals.com"
        },
        {
          "type": "website",
          "target": "Any localized version of www.tripadvisor.com available from the site's header or footer"
        },
        {
          "type": "website",
          "target": "Any publicly accessible TripAdvisor web asset or host (domains, ip space, etc) - except for what’s explicitly listed as Out-of-Scope below"
        },
        {
          "type": "android",
          "target": "TripAdvisor Android App"
        },
        {
          "type": "ios",
          "target": "TripAdvisor Owner APP (https://itunes.apple.com/us/app/vacation-rentals-owner-app-by-tripadvisor/id1045663228?mt=8)"
        },
        {
          "type": "ios",
          "target": "TripAdvisor iOS App"
        },
        {
          "type": "api",
          "target": "api.production.cde.tamg.cloud"
        },
        {
          "type": "api",
          "target": "api.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "gwapi.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "gwapi1.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "gwapi2.tripadvisor.com"
        },
        {
          "type": "website",
          "target": "https://www.tripadvisor.com/Hotel_Review-g52842-d730099-Reviews-Schrute_Farms-Honesdale_Pocono_Mountains_Region_Pennsylvania.html"
        },
        {
          "type": "website",
          "target": "https://www.tripadvisor.com/Plus"
        },
        {
          "type": "website",
          "target": "marlo.ext.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "partnerapi.tapayments.com"
        },
        {
          "type": "api",
          "target": "partnerapi1.tapayments.com"
        },
        {
          "type": "api",
          "target": "partnerapi2.tapayments.com"
        },
        {
          "type": "website",
          "target": "rentals.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "service.platform.tripadvisor.com"
        },
        {
          "type": "api",
          "target": "walletproxy.tapayments.com"
        },
        {
          "type": "api",
          "target": "walletproxy1.tapayments.com"
        },
        {
          "type": "api",
          "target": "walletproxy2.tapayments.com"
        },
        {
          "type": "website",
          "target": "www.tripadvisor.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": " ir.tripadvisor.com"
        },
        {
          "type": "website",
          "target": "*.bokun.app"
        },
        {
          "type": "website",
          "target": "*.bokun.com"
        },
        {
          "type": "website",
          "target": "*.bokun.eu"
        },
        {
          "type": "website",
          "target": "*.bokun.io"
        },
        {
          "type": "website",
          "target": "*.bokun.is"
        },
        {
          "type": "website",
          "target": "*.bokun.team"
        },
        {
          "type": "website",
          "target": "*.bokun.tools"
        },
        {
          "type": "website",
          "target": "*.bokun.website"
        },
        {
          "type": "website",
          "target": "*.bokunmobile.website"
        },
        {
          "type": "website",
          "target": "*.experiences.zone"
        },
        {
          "type": "website",
          "target": "*.tripadviser.at"
        },
        {
          "type": "website",
          "target": "*.tripadvisor.cn"
        },
        {
          "type": "website",
          "target": "*.tripadvisoradexpress.*"
        },
        {
          "type": "website",
          "target": "*.tripadvisorwifi.*"
        },
        {
          "type": "website",
          "target": "careers.tripadvisor.com"
        },
        {
          "type": "website",
          "target": "lmt.tripadvisor.com"
        },
        {
          "type": "website",
          "target": "spotlight-dev.tripadvisor.com"
        },
        {
          "type": "website",
          "target": "spotlight.tripadvisor.*"
        },
        {
          "type": "website",
          "target": "www.tripadvisor.*/Mobile*"
        },
        {
          "type": "website",
          "target": "www.tripadvisor.*/Trips"
        },
        {
          "type": "website",
          "target": "www.tripadvisor.*/engineering"
        }
      ]
    }
  },
  {
    "name": "20 Minuten",
    "url": "https://bugcrowd.com/twentyminuten",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://amp.20min.ch"
        },
        {
          "type": "api",
          "target": "https://api.20min.ch/"
        },
        {
          "type": "website",
          "target": "https://comment-moderation-stats.20min.ch"
        },
        {
          "type": "website",
          "target": "https://coral.20min.ch/"
        },
        {
          "type": "website",
          "target": "https://myshop.20min.ch"
        },
        {
          "type": "website",
          "target": "https://partner-feeds.20min.ch"
        },
        {
          "type": "website",
          "target": "https://pcm-admin.20min.ch"
        },
        {
          "type": "website",
          "target": "https://pcm-admin.beta.20min.ch/"
        },
        {
          "type": "website",
          "target": "https://pcm-api.20min.ch"
        },
        {
          "type": "website",
          "target": "https://pcm-api.beta.20min.ch"
        },
        {
          "type": "website",
          "target": "https://pcm-imaginary.20min.ch"
        },
        {
          "type": "api",
          "target": "https://pcm-imaginary.beta.20min.ch/"
        },
        {
          "type": "website",
          "target": "https://pcm.20min.ch"
        },
        {
          "type": "website",
          "target": "https://pcm.beta.20min.ch"
        },
        {
          "type": "website",
          "target": "https://screenplayer.20min.ch"
        },
        {
          "type": "website",
          "target": "https://videoplayer.20min.ch"
        },
        {
          "type": "website",
          "target": "https://www.20min.ch"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.20min-tv.ch"
        },
        {
          "type": "website",
          "target": "*.appuser.ch"
        },
        {
          "type": "website",
          "target": "*.iagentur.ch"
        },
        {
          "type": "website",
          "target": "*.newsnetz.tv"
        },
        {
          "type": "website",
          "target": "*.onelog.ch"
        },
        {
          "type": "website",
          "target": "*.streamboat.ch"
        },
        {
          "type": "website",
          "target": "*.streamboatserver.ch"
        },
        {
          "type": "other",
          "target": "DMARC, SPF, DKIM"
        },
        {
          "type": "other",
          "target": "Other Domains and Subdomains not specifically in scope"
        },
        {
          "type": "website",
          "target": "Social Media Links (older than 2 years)"
        },
        {
          "type": "other",
          "target": "Subdomain Takeover "
        },
        {
          "type": "website",
          "target": "http://auth.20min.ch"
        },
        {
          "type": "website",
          "target": "https://*.connect.ringier.ch"
        },
        {
          "type": "api",
          "target": "https://cre-api.tamedia.ch"
        },
        {
          "type": "api",
          "target": "https://tgt.tamedia.ch"
        },
        {
          "type": "website",
          "target": "https://track.20min.ch"
        }
      ]
    }
  },
  {
    "name": "23andMe",
    "url": "https://bugcrowd.com/twentythree-and-me",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Open Source"
        },
        {
          "type": "api",
          "target": "api.23andme.com"
        },
        {
          "type": "api",
          "target": "api.cag.us-west-2.int.23andme.us"
        },
        {
          "type": "website",
          "target": "auth.23andme.com"
        },
        {
          "type": "website",
          "target": "auth.cag.us-west-2.int.23andme.us"
        },
        {
          "type": "website",
          "target": "blog.23andme.com"
        },
        {
          "type": "website",
          "target": "education.23andme.com"
        },
        {
          "type": "website",
          "target": "mediacenter.23andme.com"
        },
        {
          "type": "website",
          "target": "medical.23andme.com"
        },
        {
          "type": "website",
          "target": "research.23andme.com"
        },
        {
          "type": "website",
          "target": "store.23andme.com"
        },
        {
          "type": "website",
          "target": "therapeutics.23andme.com"
        },
        {
          "type": "website",
          "target": "you.23andme.com"
        },
        {
          "type": "website",
          "target": "you.cag.us-west-2.int.23andme.us"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "23andme.mybrightsites.com"
        },
        {
          "type": "website",
          "target": "click.mail.23andme.com"
        },
        {
          "type": "website",
          "target": "customercare.23andme.com"
        },
        {
          "type": "website",
          "target": "gis.23andme.com"
        },
        {
          "type": "website",
          "target": "gis.us-west-2.live.23andme.us"
        }
      ]
    }
  },
  {
    "name": "Twilio",
    "url": "https://bugcrowd.com/twilio",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 9500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": " *.sip.*.twilio.com"
        },
        {
          "type": "other",
          "target": " Twilio CDNs (static*.twilio.com)"
        },
        {
          "type": "other",
          "target": " Twilio Helper Libraries"
        },
        {
          "type": "other",
          "target": " Twilio WebRTC Client"
        },
        {
          "type": "other",
          "target": " Twilio Wireless"
        },
        {
          "type": "other",
          "target": " tsock.us1.twilio.com"
        },
        {
          "type": "other",
          "target": "Any host / web property verified to be owned by Segment (domains/IP space/etc.)\t"
        },
        {
          "type": "website",
          "target": "Any host/web property verified to be owned by Twilio"
        },
        {
          "type": "android",
          "target": "Authy Android App"
        },
        {
          "type": "other",
          "target": "Authy Desktop app"
        },
        {
          "type": "ios",
          "target": "Authy iOS app"
        },
        {
          "type": "other",
          "target": "Source code of Website, Mobile, or Server Libraries (https://segment.com/docs/sources/)"
        },
        {
          "type": "api",
          "target": "Twilio APIs"
        },
        {
          "type": "website",
          "target": "Twilio Authy - https://api.authy.com"
        },
        {
          "type": "api",
          "target": "Twilio Authy API"
        },
        {
          "type": "api",
          "target": "Twilio Authy Dashboard API"
        },
        {
          "type": "website",
          "target": "Twilio Console"
        },
        {
          "type": "other",
          "target": "Twilio SDKs"
        },
        {
          "type": "api",
          "target": "Twilio Verify - https://verify.twilio.com"
        },
        {
          "type": "api",
          "target": "api.segment.io"
        },
        {
          "type": "api",
          "target": "api.sendgrid.com"
        },
        {
          "type": "api",
          "target": "api.twilio.com"
        },
        {
          "type": "website",
          "target": "app.segment.com"
        },
        {
          "type": "website",
          "target": "https://app.sendgrid.com/"
        },
        {
          "type": "website",
          "target": "https://build.twilio.com/s/"
        },
        {
          "type": "website",
          "target": "https://mc.sendgrid.com/"
        },
        {
          "type": "website",
          "target": "https://sendgrid.com"
        },
        {
          "type": "website",
          "target": "https://signup.sendgrid.com/"
        },
        {
          "type": "other",
          "target": "smtp.sendgrid.net"
        },
        {
          "type": "website",
          "target": "twilio.com/blog"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "All Kurento domains"
        },
        {
          "type": "other",
          "target": "All Twilio acquisitions until explicitly noted under the in-scope targets"
        },
        {
          "type": "website",
          "target": "Demo websites e.g. lab.authy.com"
        },
        {
          "type": "other",
          "target": "Third-party services used by SendGrid"
        },
        {
          "type": "other",
          "target": "TwimlBins"
        },
        {
          "type": "website",
          "target": "Ytica and its assets "
        },
        {
          "type": "website",
          "target": "ahoy-eloqua.twilio.com"
        },
        {
          "type": "website",
          "target": "community.segment.com"
        },
        {
          "type": "website",
          "target": "https://dashboard.authy.com"
        },
        {
          "type": "website",
          "target": "https://www.zipwhip.com/*"
        },
        {
          "type": "website",
          "target": "issues-sendgrid.dev.twilio.com"
        },
        {
          "type": "website",
          "target": "s.signal.twilio.com"
        },
        {
          "type": "website",
          "target": "segment.com/contact"
        },
        {
          "type": "website",
          "target": "segment.com/jobs\t"
        },
        {
          "type": "website",
          "target": "status.sendgrid.com"
        },
        {
          "type": "website",
          "target": "store.twilio.com"
        },
        {
          "type": "website",
          "target": "support.sendgrid.com"
        },
        {
          "type": "website",
          "target": "support.twilio.com"
        },
        {
          "type": "website",
          "target": "surveys.twilio.com"
        },
        {
          "type": "website",
          "target": "twiliotraining.com"
        },
        {
          "type": "website",
          "target": "www.twilio.com/labs"
        },
        {
          "type": "website",
          "target": "www.twilio.com/quest"
        }
      ]
    }
  },
  {
    "name": "Tyler Technologies Data & Insights – Tyler Data Platform, powered by Socrata",
    "url": "https://bugcrowd.com/tyler-tech-data-insights",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3500,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "https://opendata-demo.test-socrata.com"
        },
        {
          "type": "other",
          "target": "https://opendata.test-socrata.com"
        },
        {
          "type": "website",
          "target": "https://opendata.test-socrata.com/admin/gateway"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Under Armour AppSec",
    "url": "https://bugcrowd.com/underarmour",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 2500,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "MapMyFitness  Android"
        },
        {
          "type": "ios",
          "target": "MapMyFitness  iOS"
        },
        {
          "type": "website",
          "target": "UA HOVR Equipped running shoe that you own or have authorization to test"
        },
        {
          "type": "android",
          "target": "UA Shop Android"
        },
        {
          "type": "ios",
          "target": "UA Shop iOS"
        },
        {
          "type": "other",
          "target": "https://www.mapmyfitness.com"
        },
        {
          "type": "other",
          "target": "https://www.mapmyride.com"
        },
        {
          "type": "other",
          "target": "https://www.mapmyrun.com"
        },
        {
          "type": "other",
          "target": "https://www.mapmywalk.com"
        },
        {
          "type": "website",
          "target": "https://www.underarmour.co.uk"
        },
        {
          "type": "website",
          "target": "https://www.underarmour.com"
        },
        {
          "type": "other",
          "target": "mapmyfitness.api.ua.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Under Armour Corporate",
    "url": "https://bugcrowd.com/underarmour-corp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "13.238.112.7"
        },
        {
          "type": "other",
          "target": "13.58.121.166"
        },
        {
          "type": "other",
          "target": "204.29.196.0/23"
        },
        {
          "type": "other",
          "target": "3.133.230.28"
        },
        {
          "type": "other",
          "target": "3.19.172.158"
        },
        {
          "type": "other",
          "target": "3.223.149.182"
        },
        {
          "type": "other",
          "target": "3.230.219.249"
        },
        {
          "type": "other",
          "target": "34.237.130.2"
        },
        {
          "type": "other",
          "target": "34.239.5.227"
        },
        {
          "type": "other",
          "target": "52.220.158.49"
        },
        {
          "type": "website",
          "target": "52.44.176.187"
        },
        {
          "type": "other",
          "target": "52.67.69.35"
        },
        {
          "type": "other",
          "target": "52.76.174.107"
        },
        {
          "type": "other",
          "target": "52.86.17.52"
        },
        {
          "type": "other",
          "target": "54.83.32.16"
        },
        {
          "type": "website",
          "target": "apphouse.underarmour.com"
        },
        {
          "type": "other",
          "target": "ourhouse.underarmour.com"
        },
        {
          "type": "website",
          "target": "snc.underarmour.com"
        },
        {
          "type": "website",
          "target": "snctest-c.underarmour.com"
        },
        {
          "type": "website",
          "target": "snctest-s.underarmour.com"
        },
        {
          "type": "website",
          "target": "supplier.underarmour.com"
        },
        {
          "type": "website",
          "target": "transfer.underarmour.com"
        },
        {
          "type": "website",
          "target": "underarmournext.com"
        },
        {
          "type": "website",
          "target": "vpe-us.underarmour.com"
        },
        {
          "type": "website",
          "target": "vtxapp9d.underarmour.com"
        },
        {
          "type": "website",
          "target": "vtxapp9p.underarmour.com"
        },
        {
          "type": "website",
          "target": "vtxapp9q.underarmour.com"
        },
        {
          "type": "website",
          "target": "vtxappd.underarmour.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "blog.underarmour.com"
        },
        {
          "type": "other",
          "target": "careers.underarmour.com"
        },
        {
          "type": "other",
          "target": "investor.underarmour.com "
        },
        {
          "type": "website",
          "target": "productsafety.underarmour.com"
        },
        {
          "type": "website",
          "target": "uaallaccess.com"
        },
        {
          "type": "website",
          "target": "uabusiness.force.com"
        },
        {
          "type": "website",
          "target": "www.plankindustries.com"
        },
        {
          "type": "website",
          "target": "www.uabiz.com"
        },
        {
          "type": "website",
          "target": "www.uaretail.com"
        },
        {
          "type": "website",
          "target": "www.uateamcatalogs.com "
        },
        {
          "type": "website",
          "target": "www.underarmour.<country> "
        },
        {
          "type": "website",
          "target": "www.underarmour.com/en-us/affiliate-home"
        },
        {
          "type": "website",
          "target": "www.underarmour.jobs"
        }
      ]
    }
  },
  {
    "name": "Unilever Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/unilever-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*. caress.us"
        },
        {
          "type": "website",
          "target": "*. emergebeautiful.com"
        },
        {
          "type": "website",
          "target": "*. lovebeautyandplanet.com"
        },
        {
          "type": "website",
          "target": "*. lovehomeandplanet.com"
        },
        {
          "type": "website",
          "target": "*. magnumicecream.com"
        },
        {
          "type": "website",
          "target": "*.Algida.pl"
        },
        {
          "type": "website",
          "target": "*.Uol-maint.unilever.com"
        },
        {
          "type": "website",
          "target": "*.VO5.co.uk"
        },
        {
          "type": "website",
          "target": "*.YoungEntrepreneursAwards.Unilever.com"
        },
        {
          "type": "website",
          "target": "*.axe.com"
        },
        {
          "type": "website",
          "target": "*.bedhead.com/uk/"
        },
        {
          "type": "website",
          "target": "*.br.recepedia.com/"
        },
        {
          "type": "website",
          "target": "*.clearhaircare.com/sg/"
        },
        {
          "type": "website",
          "target": "*.close-up.com/"
        },
        {
          "type": "website",
          "target": "*.conimex.nl"
        },
        {
          "type": "website",
          "target": "*.degreedeodorant.com"
        },
        {
          "type": "website",
          "target": "*.domestos.com/pl/home.html"
        },
        {
          "type": "website",
          "target": "*.elidor.com.tr"
        },
        {
          "type": "website",
          "target": "*.folicure.com.mx"
        },
        {
          "type": "website",
          "target": "*.getsetclean.in/in/hi"
        },
        {
          "type": "website",
          "target": "*.glowandlovelycareers.in/en/"
        },
        {
          "type": "website",
          "target": "*.hellmanns.com/uk/"
        },
        {
          "type": "website",
          "target": "*.ingman.fi/"
        },
        {
          "type": "website",
          "target": "*.joko.co.za/en"
        },
        {
          "type": "website",
          "target": "*.jornadababydove.com.br"
        },
        {
          "type": "website",
          "target": "*.kbright.com.sg/"
        },
        {
          "type": "website",
          "target": "*.klondikebar.com/"
        },
        {
          "type": "website",
          "target": "*.knorr.com"
        },
        {
          "type": "website",
          "target": "*.kwalitywalls.in/home.html"
        },
        {
          "type": "website",
          "target": "*.lifebuoy.com"
        },
        {
          "type": "website",
          "target": "*.lipton.com"
        },
        {
          "type": "website",
          "target": "*.lovehomeandplanet.com/"
        },
        {
          "type": "website",
          "target": "*.missionsignal.fr"
        },
        {
          "type": "website",
          "target": "*.mx.recepedia.com/"
        },
        {
          "type": "website",
          "target": "*.neutral.lv"
        },
        {
          "type": "website",
          "target": "*.pepsodent.com/"
        },
        {
          "type": "website",
          "target": "*.promocjeunilever.pl"
        },
        {
          "type": "website",
          "target": "*.pureitwater.com/IN/"
        },
        {
          "type": "website",
          "target": "*.rin.in/"
        },
        {
          "type": "website",
          "target": "*.skinsei.com/"
        },
        {
          "type": "website",
          "target": "*.stives.com/"
        },
        {
          "type": "website",
          "target": "*.suave.com/us/en"
        },
        {
          "type": "website",
          "target": "*.sunsilk.co.id"
        },
        {
          "type": "website",
          "target": "*.tiendavirtual.mutual-all.com.ar/"
        },
        {
          "type": "website",
          "target": "*.toolkithomecare.com"
        },
        {
          "type": "website",
          "target": "*.tresemme.com"
        },
        {
          "type": "website",
          "target": "*.unilever.com.br/"
        },
        {
          "type": "website",
          "target": "*.unilever.gr/"
        },
        {
          "type": "website",
          "target": "*.unilever.ro/"
        },
        {
          "type": "website",
          "target": "*.unileverhealth.co.za"
        },
        {
          "type": "website",
          "target": "*.uniquelyunilever.com"
        },
        {
          "type": "website",
          "target": "*.unox.nl"
        },
        {
          "type": "website",
          "target": "*.urbanmonkey.sk"
        },
        {
          "type": "website",
          "target": "*.uttcentraldb.com"
        },
        {
          "type": "website",
          "target": "*.vazoplintirio.gr"
        },
        {
          "type": "website",
          "target": "*.veksthus.knorr.no"
        },
        {
          "type": "website",
          "target": "*.vivaelagua.com.mx"
        },
        {
          "type": "website",
          "target": "*.voteuntukimpianku.com"
        },
        {
          "type": "website",
          "target": "*.wa-na.unileversolutions.com"
        },
        {
          "type": "website",
          "target": "*.wakacjezknorr.pl"
        },
        {
          "type": "website",
          "target": "*.wallsthailand.com"
        },
        {
          "type": "website",
          "target": "*.weareul.com"
        },
        {
          "type": "website",
          "target": "*.whatsfordinner.co.za"
        },
        {
          "type": "website",
          "target": "*.whitenow.com"
        },
        {
          "type": "website",
          "target": "*.yukmulaibijakplastik.com"
        },
        {
          "type": "website",
          "target": "*.yulaenergy.com"
        },
        {
          "type": "website",
          "target": "*.zest.com.mx/"
        },
        {
          "type": "website",
          "target": "*.zmrzlina-misa.sk/"
        },
        {
          "type": "website",
          "target": "horlicks.in"
        },
        {
          "type": "website",
          "target": "http://www.benjerry.co.il/"
        },
        {
          "type": "website",
          "target": "http://www.benjerry.co.uk"
        },
        {
          "type": "website",
          "target": "http://www.ponds.com.mx/"
        },
        {
          "type": "website",
          "target": "http://www.popsicle.ca/en"
        },
        {
          "type": "website",
          "target": "http://www.popsicle.ca/fr/"
        },
        {
          "type": "website",
          "target": "http://www.rexona.com.pe"
        },
        {
          "type": "website",
          "target": "http://www.sedal.com.pe"
        },
        {
          "type": "website",
          "target": "http://www.vim.com.ar"
        },
        {
          "type": "website",
          "target": "http://zwitsal.be/be/fr/"
        },
        {
          "type": "website",
          "target": "https://magento.volle-truhe.at/"
        },
        {
          "type": "website",
          "target": "https://magento.volle-truhe.at/\t"
        },
        {
          "type": "website",
          "target": "https://magento.volle-truhe.at/distributor/account/login/"
        },
        {
          "type": "website",
          "target": "https://online.frisko.dk/B2B"
        },
        {
          "type": "website",
          "target": "https://online.frisko.dk/customer/account/login/"
        },
        {
          "type": "website",
          "target": "https://personalisedpgtips.co.uk/products/pg-tips-customisable-mug "
        },
        {
          "type": "website",
          "target": "https://regeneratenr5.com.br/"
        },
        {
          "type": "website",
          "target": "https://regeneratenr5.es/"
        },
        {
          "type": "website",
          "target": "https://regeneratenr5.it/"
        },
        {
          "type": "website",
          "target": "https://sedal.com.mx"
        },
        {
          "type": "website",
          "target": "https://selfservices.unileversolutions.com/login.aspx"
        },
        {
          "type": "website",
          "target": "https://shop.lakmesalon.in/"
        },
        {
          "type": "website",
          "target": "https://tryunilever.com/"
        },
        {
          "type": "website",
          "target": "https://ubeautyzone.com/"
        },
        {
          "type": "website",
          "target": "https://uclub.unilever.tw/"
        },
        {
          "type": "website",
          "target": "https://unilever.com/"
        },
        {
          "type": "website",
          "target": "https://unilever.shop/"
        },
        {
          "type": "website",
          "target": "https://unileverstaff.shop/"
        },
        {
          "type": "website",
          "target": "https://unishopus.com/account/login?checkout_url=/"
        },
        {
          "type": "website",
          "target": "https://ushop.co.ke/"
        },
        {
          "type": "website",
          "target": "https://webmail.unileverservices.com/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.at"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.be/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.ch/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.co.nz/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.co.th/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.com.pr/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.com.sg"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.com/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.de/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.dk/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.fi/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.fr/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.ie/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.it"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.nl/"
        },
        {
          "type": "website",
          "target": "https://www.benjerry.no/"
        },
        {
          "type": "website",
          "target": "https://www.hellmanns.com/es/home.html"
        },
        {
          "type": "website",
          "target": "https://www.marmite.co.uk/the-marmite-shop.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com.ar"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/arabia/en/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/co/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/id/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/pe/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/pk/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/th/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/us/en/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/us/es/home.html"
        },
        {
          "type": "website",
          "target": "https://www.ponds.com/vn/home.html"
        },
        {
          "type": "website",
          "target": "https://www.popsicle.com/us/en"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/arabia/ar"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/arabia/en"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/au/en"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/be/fr"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/be/nl"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/ca/en"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/ch/de"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/ch/fr"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/fi/fi"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/fr/fr"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/it/it"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/no/no"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/pl"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/se/sv"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/uk/en/"
        },
        {
          "type": "website",
          "target": "https://www.pukkaherbs.com/us/en"
        },
        {
          "type": "website",
          "target": "https://www.regeneratenr5.co.uk/"
        },
        {
          "type": "website",
          "target": "https://www.regeneratenr5.fr/"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/ar/"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/arabia/ar/"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/arabia/en/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/at/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/au/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/ch/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/cl"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/co/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/cz/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/de/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/dk"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/eg/ar/"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/eg/en/"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/es/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/fi/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/hu/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/id/home.html"
        },
        {
          "type": "website",
          "target": "https://www.rexona.com/se/home.html"
        },
        {
          "type": "website",
          "target": "https://www.sedal.cl/home.html"
        },
        {
          "type": "website",
          "target": "https://www.sedal.co.cr/home.html"
        },
        {
          "type": "website",
          "target": "https://www.sedal.com.ar/inicio.html"
        },
        {
          "type": "website",
          "target": "https://www.sedal.com.ec/home.html"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/arabia/ar"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/arabia/en"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/au"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/br"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/ca/en"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/ca/fr"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/id"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/il/en"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/il/he"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/mx"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/my"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/no"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/ph"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/pt"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/sg"
        },
        {
          "type": "website",
          "target": "https://www.simpleskincare.com/th"
        },
        {
          "type": "website",
          "target": "https://www.surfshine.co.za/"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/ph/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/pl/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/ru/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/se/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/sk/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/th/home.html"
        },
        {
          "type": "website",
          "target": "https://www.tresemme.com/us/en/home.html"
        },
        {
          "type": "website",
          "target": "https://www.u-connect.co.in/"
        },
        {
          "type": "website",
          "target": "https://www.ufs.com/"
        },
        {
          "type": "website",
          "target": "https://www.unilever-pro-nutrition-sante.fr/"
        },
        {
          "type": "website",
          "target": "https://www.unileverlife.com/"
        },
        {
          "type": "website",
          "target": "https://www.unishopza.com/account/login?checkout_url=/"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/arabia/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/ca/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/ca/fr"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/id/id"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/in/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/lk/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/my/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/th/th"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/us/es"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.com/za/en"
        },
        {
          "type": "website",
          "target": "https://www.vaseline.jp/"
        },
        {
          "type": "website",
          "target": "https://www.vasenol.com.br/"
        },
        {
          "type": "website",
          "target": "https://www.via.se/home.html"
        },
        {
          "type": "website",
          "target": "https://www.vim.ca/fr-CA/home.html"
        },
        {
          "type": "website",
          "target": "https://www.vim.ca/home.html"
        },
        {
          "type": "website",
          "target": "https://www.visopises.com/"
        },
        {
          "type": "website",
          "target": "https://www.wallpaintingunilever.com/WP/"
        },
        {
          "type": "website",
          "target": "https://www.walls.com.my/home.html"
        },
        {
          "type": "website",
          "target": "https://www.wallsicecream.com/id/home.html"
        },
        {
          "type": "website",
          "target": "https://www.wallsicecream.com/uk/home.html"
        },
        {
          "type": "website",
          "target": "https://www.wallsthailand.com/home.html"
        },
        {
          "type": "website",
          "target": "https://www.weareul.com/"
        },
        {
          "type": "website",
          "target": "https://www.weis.com.au/"
        },
        {
          "type": "website",
          "target": "https://www.winnenmetunilever.nl/"
        },
        {
          "type": "website",
          "target": "https://www.yumos.com/home.html"
        },
        {
          "type": "website",
          "target": "https://www.zendium.co.uk/"
        },
        {
          "type": "website",
          "target": "https://www.zest.com.mx/"
        },
        {
          "type": "website",
          "target": "https://www.zmrzlina-misa.cz/"
        },
        {
          "type": "website",
          "target": "https://zendium.shop/"
        },
        {
          "type": "website",
          "target": "kwery.unileversolutions.com/us-en"
        },
        {
          "type": "website",
          "target": "magento.volle-truhe.at/distributor/account/"
        },
        {
          "type": "website",
          "target": "online.frisko.dk/"
        },
        {
          "type": "website",
          "target": "online.frisko.dk/customer/account/login/"
        },
        {
          "type": "website",
          "target": "ufs.com/"
        },
        {
          "type": "website",
          "target": "uni-care.shop"
        },
        {
          "type": "website",
          "target": "unicornci.unileverservices.com"
        },
        {
          "type": "website",
          "target": "unileverfll.pl"
        },
        {
          "type": "website",
          "target": "us.therollingcone.com"
        },
        {
          "type": "website",
          "target": "uukpf.co.uk"
        },
        {
          "type": "website",
          "target": "vaseline.com.tr"
        },
        {
          "type": "website",
          "target": "vaseline.com/us/en"
        },
        {
          "type": "website",
          "target": "www.sedal.com.co/home.html"
        },
        {
          "type": "website",
          "target": "www.theushop.ca"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/ua"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/uk/home.html"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/uk/preference-center/preference-optin.html"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/us/en/home.html"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/uy/home.html"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/vn/home.html"
        },
        {
          "type": "website",
          "target": "www.tresemme.com/za/home.html"
        },
        {
          "type": "website",
          "target": "www.tresemmeprofissional.com.br"
        },
        {
          "type": "website",
          "target": "www.ufsplusprogram.com.my"
        },
        {
          "type": "website",
          "target": "www.urbanmonkey.cz"
        },
        {
          "type": "website",
          "target": "www.ushopbd.com"
        },
        {
          "type": "website",
          "target": "www.ustore.lk"
        },
        {
          "type": "website",
          "target": "xedex-centroamerica.com/home.html"
        },
        {
          "type": "website",
          "target": "yulaenergy.com/es/en"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "United Airlines",
    "url": "https://bugcrowd.com/united-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.ual.com"
        },
        {
          "type": "website",
          "target": "*.united.com"
        },
        {
          "type": "android",
          "target": "MileagePlus X App for Android"
        },
        {
          "type": "ios",
          "target": "MileagePlus X App for iOS"
        },
        {
          "type": "other",
          "target": "Non-production environments (preview, pre-prod, dev, qa or stage/staging)"
        },
        {
          "type": "android",
          "target": "United Mobile App for Android"
        },
        {
          "type": "ios",
          "target": "United Mobile App for iOS"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.mileageplus.com"
        },
        {
          "type": "website",
          "target": "*.unitedvacationsdive.com"
        },
        {
          "type": "other",
          "target": "3rd party applications/services"
        },
        {
          "type": "other",
          "target": "Onboard Wi-Fi, entertainment systems or avionics"
        },
        {
          "type": "website",
          "target": "bigmetalbird.united.com"
        },
        {
          "type": "website",
          "target": "booking.unitedcargo.com"
        },
        {
          "type": "website",
          "target": "brand.united.com"
        },
        {
          "type": "website",
          "target": "cardmemberoffers.united.com"
        },
        {
          "type": "website",
          "target": "careers.united.com"
        },
        {
          "type": "website",
          "target": "cars.united.com"
        },
        {
          "type": "website",
          "target": "chargerback.com"
        },
        {
          "type": "website",
          "target": "clubconferencerooms.united.com/unit"
        },
        {
          "type": "website",
          "target": "cruises.united.com"
        },
        {
          "type": "website",
          "target": "dutyfree.united.com"
        },
        {
          "type": "website",
          "target": "globallinks.united.com"
        },
        {
          "type": "website",
          "target": "globalservices.united.com"
        },
        {
          "type": "website",
          "target": "hotels.united.com"
        },
        {
          "type": "website",
          "target": "hub.united.com"
        },
        {
          "type": "website",
          "target": "ir.united.com"
        },
        {
          "type": "website",
          "target": "jobparters.united.com"
        },
        {
          "type": "website",
          "target": "m.mpdining.rewardsnetwork.com"
        },
        {
          "type": "website",
          "target": "mileageplusawards.com"
        },
        {
          "type": "website",
          "target": "mpclubcard.com"
        },
        {
          "type": "website",
          "target": "mpdining.rewardsnetwork.com"
        },
        {
          "type": "website",
          "target": "myexplorercard.com"
        },
        {
          "type": "website",
          "target": "mystatus.united.com"
        },
        {
          "type": "website",
          "target": "news.united.com/responsys"
        },
        {
          "type": "website",
          "target": "newspaper-miles.com"
        },
        {
          "type": "website",
          "target": "newsroom.united.com"
        },
        {
          "type": "website",
          "target": "opinions.united.com"
        },
        {
          "type": "website",
          "target": "packages.united.com"
        },
        {
          "type": "website",
          "target": "secure.unitedmileageplus.com"
        },
        {
          "type": "website",
          "target": "survey.continental.com/vovici.net"
        },
        {
          "type": "website",
          "target": "thanksamillion.united.com"
        },
        {
          "type": "website",
          "target": "theexplorercard.com"
        },
        {
          "type": "website",
          "target": "ualmiles.com"
        },
        {
          "type": "website",
          "target": "uatp.united.com"
        },
        {
          "type": "website",
          "target": "uma.united.com"
        },
        {
          "type": "website",
          "target": "united-veterans.jobs"
        },
        {
          "type": "website",
          "target": "unitedexplorecard.com"
        },
        {
          "type": "website",
          "target": "unitedexplorer.com"
        },
        {
          "type": "website",
          "target": "unitedexplorercard.com"
        },
        {
          "type": "website",
          "target": "unitedmileageplus.com"
        },
        {
          "type": "website",
          "target": "unitedshop.summitmg.com"
        },
        {
          "type": "website",
          "target": "vacations.united.com"
        }
      ]
    }
  },
  {
    "name": "Unity Technology",
    "url": "https://bugcrowd.com/unity",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Latest Supported LTS versions of the Unity Editor ( 2018.x / 2019.x / 2020.x ) "
        },
        {
          "type": "other",
          "target": "Unity Hub"
        },
        {
          "type": "website",
          "target": "analytics.cloud.unity3d.com"
        },
        {
          "type": "api",
          "target": "api.unity.com"
        },
        {
          "type": "website",
          "target": "dashboard.unity3d.com"
        },
        {
          "type": "website",
          "target": "id.unity.com"
        },
        {
          "type": "website",
          "target": "pay.unity.com"
        },
        {
          "type": "other",
          "target": "player-login.unity.com"
        },
        {
          "type": "website",
          "target": "store.unity.com"
        },
        {
          "type": "website",
          "target": "syncsketch.dev"
        },
        {
          "type": "website",
          "target": "www.unity3d.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Upwork",
    "url": "https://bugcrowd.com/upwork",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Direct Contracts"
        },
        {
          "type": "android",
          "target": "Upwork - Android Application"
        },
        {
          "type": "ios",
          "target": "Upwork - iOS Application"
        },
        {
          "type": "hardware",
          "target": "Upwork Dash Messenger Desktop Version (www.upwork.com/downloads)"
        },
        {
          "type": "website",
          "target": "www.upwork.com"
        },
        {
          "type": "api",
          "target": "www.upwork.com/api "
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "Any Third-party Services"
        },
        {
          "type": "other",
          "target": "Any subdomain/domain/property not listed in the 'in scope' section, is out of scope. "
        },
        {
          "type": "other",
          "target": "Social media hijacking"
        },
        {
          "type": "api",
          "target": "api.upwork.com/graphql"
        },
        {
          "type": "other",
          "target": "careers.upwork.com"
        },
        {
          "type": "other",
          "target": "community.stage.upwork.com"
        },
        {
          "type": "other",
          "target": "community.upwork.com"
        },
        {
          "type": "other",
          "target": "e.upwork.com"
        },
        {
          "type": "other",
          "target": "pardot.upwork.com"
        },
        {
          "type": "other",
          "target": "signature.upwork.com"
        },
        {
          "type": "other",
          "target": "stage.upwork.com"
        },
        {
          "type": "other",
          "target": "status.upwork.com"
        },
        {
          "type": "other",
          "target": "support.upwork.com"
        },
        {
          "type": "website",
          "target": "tip.upwork.com"
        },
        {
          "type": "other",
          "target": "tip.upwork.com "
        }
      ]
    }
  },
  {
    "name": "USAA",
    "url": "https://bugcrowd.com/usaa",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 6000,
    "targets": {
      "in_scope": [
        {
          "type": "android",
          "target": "USAA Mobile Application for Android"
        },
        {
          "type": "ios",
          "target": "USAA Mobile Application for iOS"
        },
        {
          "type": "api",
          "target": "api-life.usaa.com"
        },
        {
          "type": "api",
          "target": "contentapi.usaa.com"
        },
        {
          "type": "website",
          "target": "empauthn.usaa.com"
        },
        {
          "type": "website",
          "target": "external.connect.usaa.com"
        },
        {
          "type": "website",
          "target": "externalconnect.usaa.com"
        },
        {
          "type": "api",
          "target": "https://api.usaa.com/"
        },
        {
          "type": "api",
          "target": "https://api2.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://authn.usaa.com/"
        },
        {
          "type": "api",
          "target": "https://b2bapi.usaa.com"
        },
        {
          "type": "api",
          "target": "https://b2blsapi.usaa.com"
        },
        {
          "type": "website",
          "target": "https://content.usaa.com"
        },
        {
          "type": "website",
          "target": "https://guest.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://l.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://liveassist.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://liveassist11.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://liveassist12.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://liveassist21.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://liveassist22.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://login.usaa.com/"
        },
        {
          "type": "api",
          "target": "https://mapi.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://mguest.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://mobileapps.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://my.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://nicewfm.usaa.com"
        },
        {
          "type": "other",
          "target": "https://nvoice.usaa.com/"
        },
        {
          "type": "other",
          "target": "https://s.usaa.com/"
        },
        {
          "type": "api",
          "target": "https://service2.usaa.com"
        },
        {
          "type": "website",
          "target": "https://vendorss.usaa.com"
        },
        {
          "type": "website",
          "target": "https://vlagg.usaa.com"
        },
        {
          "type": "website",
          "target": "https://vlapi.usaa.com"
        },
        {
          "type": "api",
          "target": "https://ws.usaa.com"
        },
        {
          "type": "api",
          "target": "https://wsmbr.usaa.com/"
        },
        {
          "type": "website",
          "target": "https://www.usaainsurance.com/"
        },
        {
          "type": "other",
          "target": "mam-prod-dfw.usaa.com"
        },
        {
          "type": "other",
          "target": "mam-prod-itc.usaa.com"
        },
        {
          "type": "other",
          "target": "mam-vpn-itc.usaa.com"
        },
        {
          "type": "api",
          "target": "mcontentapi.usaa.com"
        },
        {
          "type": "other",
          "target": "mdm1.usaa.com"
        },
        {
          "type": "website",
          "target": "mobile.usaa.com"
        },
        {
          "type": "website",
          "target": "mstatic.usaa.com"
        },
        {
          "type": "website",
          "target": "mydesktop.usaa.com"
        },
        {
          "type": "website",
          "target": "myvpn.usaa.com"
        },
        {
          "type": "other",
          "target": "partners.usaa.com"
        },
        {
          "type": "website",
          "target": "static.usaa.com"
        },
        {
          "type": "website",
          "target": "utv.usaa.com"
        },
        {
          "type": "website",
          "target": "utvqa.usaa.com"
        },
        {
          "type": "website",
          "target": "vanityocp.usaa.com"
        },
        {
          "type": "other",
          "target": "webmail.usaa.com"
        },
        {
          "type": "website",
          "target": "ww2.usaa.com"
        },
        {
          "type": "website",
          "target": "www.usaa.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Bureau of Reclamation",
    "url": "https://bugcrowd.com/usbr-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.usbr.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "United States Department of Agriculture: Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/usda-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "https://ask.usda.gov/s/"
        },
        {
          "type": "website",
          "target": "https://oha.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://professionalstandards.fns.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://www.agcounts.usda.gov/static/cawi/layouts/cawi/breeze/index.html"
        },
        {
          "type": "website",
          "target": "https://www.aphis.usda.gov/aphis/home/"
        },
        {
          "type": "website",
          "target": "https://www.dietaryguidelines.gov/"
        },
        {
          "type": "website",
          "target": "https://www.farmers.gov/"
        },
        {
          "type": "website",
          "target": "https://www.fas.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://www.fsis.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://www.nass.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://www.oem.usda.gov/"
        },
        {
          "type": "website",
          "target": "https://www.rma.usda.gov/"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Department of Veterans Affairs",
    "url": "https://bugcrowd.com/va-vdp",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.va.gov"
        },
        {
          "type": "website",
          "target": "www.reach.gov"
        },
        {
          "type": "website",
          "target": "www.vaitcampus.com"
        },
        {
          "type": "website",
          "target": "www.vavmc.com"
        },
        {
          "type": "website",
          "target": "www.veteranscrisisline.net"
        },
        {
          "type": "website",
          "target": "www.vets.gov"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Verisign",
    "url": "https://bugcrowd.com/verisign",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 10000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": " b.gtld-servers.net (DNS service; DNS related)"
        },
        {
          "type": "website",
          "target": "*.domainscope.com"
        },
        {
          "type": "website",
          "target": "*.namestudioforsocial.com"
        },
        {
          "type": "website",
          "target": "*.youcouldbe.com"
        },
        {
          "type": "other",
          "target": "a.root-servers.net (DNS service; DNS related)"
        },
        {
          "type": "other",
          "target": "a1.verisigndns.com (DNS service; DNS related)"
        },
        {
          "type": "website",
          "target": "blog.verisign.com (Website; non-DNS related)"
        },
        {
          "type": "other",
          "target": "epptool-ctld.verisign-grs.com (EPP service; DNS related)"
        },
        {
          "type": "website",
          "target": "www.verisign.com (Website; non-DNS related)"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "64.6.64.6, 64.6.65.6 (DNS Service: DNS related)"
        }
      ]
    }
  },
  {
    "name": "Viator",
    "url": "https://bugcrowd.com/viator",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 4500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.viator.com"
        },
        {
          "type": "website",
          "target": "*.viatorinc.com"
        },
        {
          "type": "android",
          "target": "Android Viator Tours & Activities App"
        },
        {
          "type": "website",
          "target": "https://help.supplier.viator.com/en"
        },
        {
          "type": "website",
          "target": "https://partners.viator.com"
        },
        {
          "type": "website",
          "target": "https://supplier.viator.com/"
        },
        {
          "type": "api",
          "target": "https://viatorapi.viator.com/service/directory"
        },
        {
          "type": "api",
          "target": "https://www.toursgds.com/"
        },
        {
          "type": "api",
          "target": "https://www.toursgds.com/SupplierService?wsdl"
        },
        {
          "type": "api",
          "target": "https://www.toursgds.com/ToursGdsService?wsdl"
        },
        {
          "type": "ios",
          "target": "iOS Viator Tours & Activities App"
        },
        {
          "type": "website",
          "target": "kiwi.partner.viator.com"
        },
        {
          "type": "website",
          "target": "partnerhelp.viator.com/"
        },
        {
          "type": "website",
          "target": "selector.viator.com"
        },
        {
          "type": "website",
          "target": "travelagents.viator.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.partner.viator.com"
        },
        {
          "type": "other",
          "target": "*.rc.viator.com"
        },
        {
          "type": "website",
          "target": "*.sandbox.viator.com"
        },
        {
          "type": "website",
          "target": "agentcenter.viator.com"
        },
        {
          "type": "website",
          "target": "operatorresources.viator.com"
        },
        {
          "type": "website",
          "target": "partnerresources.viator.com"
        }
      ]
    }
  },
  {
    "name": "Web.com",
    "url": "https://bugcrowd.com/webdotcom",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 7500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " www.register.com"
        },
        {
          "type": "website",
          "target": " www.web.com"
        },
        {
          "type": "website",
          "target": "uk.web.com"
        },
        {
          "type": "website",
          "target": "www.networksolutions.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.networksolutions.com"
        },
        {
          "type": "website",
          "target": "*.register.com"
        },
        {
          "type": "website",
          "target": "*.web.com"
        }
      ]
    }
  },
  {
    "name": "Web.com VDP",
    "url": "https://bugcrowd.com/webdotcom-vdp",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.networksolutions.com"
        },
        {
          "type": "website",
          "target": "*.register.com"
        },
        {
          "type": "website",
          "target": "*.web.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "a.mx.b.e.register.com"
        },
        {
          "type": "website",
          "target": "a.mx.m.e.register.com"
        },
        {
          "type": "website",
          "target": "b.e.register.com"
        },
        {
          "type": "website",
          "target": "b.mx.b.e.register.com"
        },
        {
          "type": "website",
          "target": "b.mx.m.e.register.com"
        },
        {
          "type": "website",
          "target": "c.mx.b.e.register.com"
        },
        {
          "type": "website",
          "target": "c.mx.m.e.register.com"
        },
        {
          "type": "website",
          "target": "calltracker.web.com"
        },
        {
          "type": "website",
          "target": "cp.networksolutions.com"
        },
        {
          "type": "website",
          "target": "cp.web.com"
        },
        {
          "type": "website",
          "target": "d.mx.b.e.register.com"
        },
        {
          "type": "website",
          "target": "d.mx.m.e.register.com"
        },
        {
          "type": "website",
          "target": "ebm.e.register.com"
        },
        {
          "type": "website",
          "target": "htadmin.register.com"
        },
        {
          "type": "website",
          "target": "raf.e.register.com"
        },
        {
          "type": "website",
          "target": "totalchat.web.com"
        }
      ]
    }
  },
  {
    "name": "Western Union",
    "url": "https://bugcrowd.com/westernunion",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.westernunion.*"
        },
        {
          "type": "website",
          "target": "*.wu.*"
        },
        {
          "type": "other",
          "target": "Any host or verified to be owned by Western Union (domains/IP space/etc.)"
        },
        {
          "type": "android",
          "target": "Western Union Android app (link below)"
        },
        {
          "type": "ios",
          "target": "Western Union iOS app (link below)"
        },
        {
          "type": "website",
          "target": "corporate.westernunion.com"
        },
        {
          "type": "website",
          "target": "http://agenttraining.westernunion.com"
        },
        {
          "type": "website",
          "target": "http://globalpay.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://agentportal.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://auth.globalpay.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://business.westernunion.com/"
        },
        {
          "type": "other",
          "target": "https://cuba.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://ebanking.westernunionbank.com"
        },
        {
          "type": "other",
          "target": "https://egypt.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://foundation.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://gpfi.globalpay.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://hk.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://india.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://jamaica.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://location.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://m.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://partners.westernunion.com "
        },
        {
          "type": "website",
          "target": "https://paymentstatus.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://senegal.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://sg.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://westernunionbank.com"
        },
        {
          "type": "website",
          "target": "https://wuagentportal.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.at"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.be"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.ca"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.ch"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.co.nz"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.co.uk"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.com"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.com.au"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.de"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.dk"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.ee"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.es"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.fi"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.fr"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.gr"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.ie"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.it"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.lu"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.nl"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.no"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.pl"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.pt"
        },
        {
          "type": "other",
          "target": "https://www.westernunion.se"
        },
        {
          "type": "other",
          "target": "https://www2.westernunion.com "
        },
        {
          "type": "website",
          "target": "iwgo.westernunion.com"
        },
        {
          "type": "website",
          "target": "masspay.api.westernunion.com"
        },
        {
          "type": "website",
          "target": "mydesktop.wu.com"
        },
        {
          "type": "website",
          "target": "partnernet.westernunion.com"
        },
        {
          "type": "website",
          "target": "payee.globalpay.westernunion.com"
        },
        {
          "type": "website",
          "target": "remoteaccess.westernunion.com"
        },
        {
          "type": "website",
          "target": "secure.westernunion.com"
        },
        {
          "type": "website",
          "target": "secureauth.westernunion.com"
        },
        {
          "type": "website",
          "target": "trackpayments.westernunion.com"
        },
        {
          "type": "website",
          "target": "transvision.westernunion.com"
        },
        {
          "type": "website",
          "target": "wucare.westernunion.com"
        },
        {
          "type": "website",
          "target": "wuinsights.westernunion.com"
        },
        {
          "type": "website",
          "target": "www.wuedge.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "Any asset not listed above as 'In Scope'"
        },
        {
          "type": "website",
          "target": "https://online.westernunion.com/mp.en/pages/loginform.aspx"
        },
        {
          "type": "website",
          "target": "https://onlinefx.westernunion.com/"
        },
        {
          "type": "website",
          "target": "https://rewardcircle.westernunion.com"
        },
        {
          "type": "website",
          "target": "https://www.wuprepaid.at/"
        },
        {
          "type": "website",
          "target": "payments.westernunion.com"
        },
        {
          "type": "website",
          "target": "www.wuprepaid.de"
        }
      ]
    }
  },
  {
    "name": "WestJet's Vulnerability Disclosure Program",
    "url": "https://bugcrowd.com/westjet-disclose",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 0,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "www.flyswoop.com"
        },
        {
          "type": "website",
          "target": "www.westjet.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "biz.westjet.com"
        },
        {
          "type": "api",
          "target": "travel.westjet.com"
        }
      ]
    }
  },
  {
    "name": "Whatfix",
    "url": "https://bugcrowd.com/whatfix",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Whatfix Desktop Editor "
        },
        {
          "type": "other",
          "target": "Whatfix Desktop Player"
        },
        {
          "type": "other",
          "target": "Whatfix Editor Extension (see below for details)"
        },
        {
          "type": "website",
          "target": "Whatfix Embed on website/ application (see below for details)"
        },
        {
          "type": "website",
          "target": "whatfix.com/bugcrowd_pentest/"
        },
        {
          "type": "website",
          "target": "whatfix.com/bugcrowd_pentest1/"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "whatfix.com"
        }
      ]
    }
  },
  {
    "name": "WHMCS Client Management Portal",
    "url": "https://bugcrowd.com/whmcs",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "partial",
    "max_payout": 5000,
    "targets": {
      "in_scope": [
        {
          "type": "other",
          "target": "Researcher owned WHMCS Instance"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.whmcs.com"
        },
        {
          "type": "other",
          "target": "Live production instance of WHMCS (Any instances not owned by you)"
        },
        {
          "type": "android",
          "target": "WHMCS Android App"
        },
        {
          "type": "other",
          "target": "WHMCS Windows mobile app"
        },
        {
          "type": "ios",
          "target": "WHMCS iOS app"
        },
        {
          "type": "website",
          "target": "whmcs.community"
        },
        {
          "type": "website",
          "target": "www.whmcs.com"
        }
      ]
    }
  },
  {
    "name": "Wise (ex-TransferWise)",
    "url": "https://bugcrowd.com/wise",
    "allows_disclosure": false,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 4000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*.transferwise.com"
        },
        {
          "type": "website",
          "target": "*.wise.com"
        },
        {
          "type": "other",
          "target": "AWS infrastructure and services in use by Wise (eg: S3 buckets)"
        },
        {
          "type": "android",
          "target": "Latest version of Wise Android App"
        },
        {
          "type": "ios",
          "target": "Latest version of Wise iOS App"
        },
        {
          "type": "other",
          "target": "github.com/transferwise/*"
        },
        {
          "type": "website",
          "target": "transferwise.com"
        },
        {
          "type": "website",
          "target": "wise.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.transferwise.tech"
        },
        {
          "type": "website",
          "target": "*.tw.com"
        },
        {
          "type": "website",
          "target": "*.tw.ee"
        },
        {
          "type": "other",
          "target": "Any Github asset not under the “transferwise” organization"
        },
        {
          "type": "android",
          "target": "Non-current version of the Android app"
        },
        {
          "type": "ios",
          "target": "Non-current version of the iOS app"
        },
        {
          "type": "website",
          "target": "Third party authentication services (eg: Facebook and Google)"
        },
        {
          "type": "website",
          "target": "Third party services not hosted by Wise"
        },
        {
          "type": "website",
          "target": "Wise Affiliate Program"
        },
        {
          "type": "website",
          "target": "bootstrap.transferwise.com"
        },
        {
          "type": "website",
          "target": "brand.transferwise.com"
        },
        {
          "type": "website",
          "target": "brand.wise.com"
        },
        {
          "type": "website",
          "target": "https://transferwise.com/help/contact"
        },
        {
          "type": "website",
          "target": "https://wise.com/help/contact"
        },
        {
          "type": "website",
          "target": "links.transferwise.com"
        },
        {
          "type": "website",
          "target": "links.wise.com"
        },
        {
          "type": "website",
          "target": "status.transferwise.com"
        },
        {
          "type": "website",
          "target": "status.wise.com"
        },
        {
          "type": "website",
          "target": "tech.transferwise.com"
        },
        {
          "type": "website",
          "target": "widgets.transferwise.com"
        }
      ]
    }
  },
  {
    "name": "WOO Network: Bug Bounty Program",
    "url": "https://bugcrowd.com/woo-network",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 9000,
    "targets": {
      "in_scope": [
        {
          "type": "api",
          "target": "https://api.woo.org/"
        },
        {
          "type": "website",
          "target": "https://x.woo.org/spot"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Wyze Bug Bounty",
    "url": "https://bugcrowd.com/wyzembb",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 1000,
    "targets": {
      "in_scope": [
        {
          "type": "hardware",
          "target": "Wyze Cam V2"
        },
        {
          "type": "hardware",
          "target": "Wyze Cam V3"
        },
        {
          "type": "api",
          "target": "https://api.wyzecam.com"
        },
        {
          "type": "website",
          "target": "https://auth.wyze.com"
        }
      ],
      "out_of_scope": [

      ]
    }
  },
  {
    "name": "Lightspeed Retail (X-Series)",
    "url": "https://bugcrowd.com/x-series",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 6250,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": " developers.vendhq.com"
        },
        {
          "type": "website",
          "target": "payment-connectors.vendhq.com"
        },
        {
          "type": "website",
          "target": "secure.vendhq.com"
        },
        {
          "type": "website",
          "target": "www.vendhq.com"
        },
        {
          "type": "website",
          "target": "yourstore.vendhq.com"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "partnerportal.vendhq.com"
        },
        {
          "type": "website",
          "target": "partners.vendhq.com"
        },
        {
          "type": "website",
          "target": "support.vendhq.com"
        },
        {
          "type": "website",
          "target": "track.api.vendhq.com"
        },
        {
          "type": "website",
          "target": "vendhq.force.com"
        },
        {
          "type": "website",
          "target": "vendimageuploadcdn.global.ssl.fastly.net"
        },
        {
          "type": "website",
          "target": "your-store.vendecommerce.com"
        }
      ]
    }
  },
  {
    "name": "Xfinity Home & xFi",
    "url": "https://bugcrowd.com/xfinity-home",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "none",
    "max_payout": 3500,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "*-cvr-aws-*.sys.comcast.net"
        },
        {
          "type": "website",
          "target": "*.dh-commerce.com "
        },
        {
          "type": "website",
          "target": "*.ssr.ccp.xcal.tv "
        },
        {
          "type": "website",
          "target": "*.xfiplatform.com"
        },
        {
          "type": "website",
          "target": "*signalservice.comcast.net"
        },
        {
          "type": "website",
          "target": "Home.xfinity.com (see below)"
        },
        {
          "type": "website",
          "target": "Internet.xfinity.com"
        },
        {
          "type": "android",
          "target": "Xfinity Android mobile app"
        },
        {
          "type": "android",
          "target": "Xfinity Home Android mobile app"
        },
        {
          "type": "hardware",
          "target": "Xfinity Home Hardware (items listed below in brief)"
        },
        {
          "type": "iot",
          "target": "Xfinity Home cameras"
        },
        {
          "type": "ios",
          "target": "Xfinity Home iOS mobile app"
        },
        {
          "type": "ios",
          "target": "Xfinity iOS mobile app"
        },
        {
          "type": "api",
          "target": "aiq-prod.codebig2.net"
        },
        {
          "type": "api",
          "target": "csp-pci.prod.codebig2.net"
        },
        {
          "type": "api",
          "target": "gw.api.dh.comcast.com"
        },
        {
          "type": "api",
          "target": "https://csp-prod.codebig2.net"
        },
        {
          "type": "website",
          "target": "orc-xfi.com"
        },
        {
          "type": "api",
          "target": "siorc.xfinity.com"
        },
        {
          "type": "website",
          "target": "smartinet.xfinity.com"
        },
        {
          "type": "website",
          "target": "speedtest.xfinity.com"
        },
        {
          "type": "hardware",
          "target": "xFi Gateways (e.g., XB3, XB6, XB7)"
        },
        {
          "type": "hardware",
          "target": "xFi Pods"
        },
        {
          "type": "api",
          "target": "xhomeapi-*.cloud.comcast.net"
        },
        {
          "type": "api",
          "target": "xhomeapi-*.codebig2.net"
        }
      ],
      "out_of_scope": [
        {
          "type": "website",
          "target": "*.adnxs.com"
        },
        {
          "type": "website",
          "target": "*.adobedtm.com"
        },
        {
          "type": "website",
          "target": "*.amazon-adsystem.com"
        },
        {
          "type": "website",
          "target": "*.appcenter.ms"
        },
        {
          "type": "website",
          "target": "*.cimcontent.net"
        },
        {
          "type": "website",
          "target": "*.criteo.net"
        },
        {
          "type": "website",
          "target": "*.demdex.net"
        },
        {
          "type": "website",
          "target": "*.fwmrm.net"
        },
        {
          "type": "website",
          "target": "*.hfc.comcastbusiness.net"
        },
        {
          "type": "website",
          "target": "*.hsd1.*.comcast.net"
        },
        {
          "type": "website",
          "target": "*.identity.xfinity.com"
        },
        {
          "type": "website",
          "target": "*.kampyle.com"
        },
        {
          "type": "website",
          "target": "*.openx.net"
        },
        {
          "type": "website",
          "target": "*.pulseinsights.com"
        },
        {
          "type": "website",
          "target": "*.webcontentassessor.com"
        },
        {
          "type": "website",
          "target": "*.wurfulcloud.com"
        },
        {
          "type": "website",
          "target": "*.xerxessecure.com"
        },
        {
          "type": "iot",
          "target": "3rd Party Devices (known as Works with Xfinity)"
        },
        {
          "type": "website",
          "target": "\\*\\business.comcast.com"
        },
        {
          "type": "website",
          "target": "login.xfinity.com"
        },
        {
          "type": "website",
          "target": "oauth.xfinity.com"
        }
      ]
    }
  },
  {
    "name": "You Need a Budget (YNAB)",
    "url": "https://bugcrowd.com/ynab",
    "allows_disclosure": true,
    "managed_by_bugcrowd": true,
    "safe_harbor": "full",
    "max_payout": 3000,
    "targets": {
      "in_scope": [
        {
          "type": "website",
          "target": "Other youneedabudget.com domains not listed"
        },
        {
          "type": "website",
          "target": "https://staging-app.youneedabudget.com/"
        }
      ],
      "out_of_scope": [
        {
          "type": "other",
          "target": "Any previous version of the desktop apps: YNAB 4, YNAB 3, YNAB Pro, YNAB Basic (Spreadsheet)"
        },
        {
          "type": "website",
          "target": "https://app.youneedabudget.com/"
        },
        {
          "type": "website",
          "target": "https://develop-app.youneedabudget.com"
        },
        {
          "type": "website",
          "target": "https://docs.youneedabudget.com/"
        },
        {
          "type": "website",
          "target": "https://forum.youneedabudget.com/"
        },
        {
          "type": "website",
          "target": "https://support.youneedabudget.com"
        }
      ]
    }
  }
]


data.map((obj)=>{
  if (obj.targets.in_scope[0] && obj.targets.in_scope[0].type == "website"){
    console.log(obj.targets.in_scope[0].target)
  }
})

