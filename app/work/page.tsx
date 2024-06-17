'use client';
import Image from 'next/image';
import { Header } from '../../components/header';
import { Collapse } from '@geist-ui/react';
import React, { useLayoutEffect } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header path="work" />

      <br />
      <br />
      <br />
      <br />

      <div className="w-full items-center justify-center flex flex-col">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Work History
          </h1>
          <br />
          <div className="App container ">
            <Collapse.Group className="text-white">
              <Collapse
                className="text-4xl font-bold"
                title="Slalom Build&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2021-present"
              >
                <h2>
                  Sr. Platform Engineer&emsp;&emsp;|&emsp;&emsp;Seattle,
                  WA&emsp;&emsp;|&emsp;&emsp;July 2022 - present
                </h2>
                <br />
                Advocate for industry best practices in projects&apos; planning
                phase.
                <br />
                Architect, diagram, and define body of work for technical
                solutions.
                <br />
                Delegate implementations of defined technical solutions while
                considering broader context and scope of tasks.
                <br />
                Balance client work with internal company expectations and
                development.
                <br />
                Create and demonstrate technical documentation and training
                materials for clients.
                <br />
                Deliver presentations on technical subjects of expertise to
                promote best practices.
                <br />
                <br />
                <ul>
                  <li>
                    &emsp;&emsp;• IaC: Terraform + CDKTF, CloudFormation + CDK,
                    CloudPosse Atmos
                  </li>
                  <li>
                    &emsp;&emsp;• CI/CD: GitHub Actions, BitBucket Pipelines,
                    BuildKite, Jenkins
                  </li>
                  <li>&emsp;&emsp;• Languages: Go, Typescript, Python, Ruby</li>
                  <li>
                    &emsp;&emsp;• Award: Build Together (2023) for translating a
                    project vision into a roadmap and guiding implementation
                  </li>
                </ul>
                <br />
                <hr />
                <br />
                <h2>
                  Platform Engineer&emsp;&emsp;|&emsp;&emsp;Seattle,
                  WA&emsp;&emsp;|&emsp;&emsp;October 2021 - July 2022
                </h2>
                <br />
                Deliver high quality implementations and documentation relating
                to:
                <ul>
                  <li>&emsp;&emsp;• Secure build and deployment automation</li>
                  <li>&emsp;&emsp;• Infrastructure as code</li>
                  <li>&emsp;&emsp;• Logging & monitoring solutions</li>
                </ul>
                Estimate individual task complexity within a sprint and
                collaborate with client and consulting teams to meet project
                milestones.
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="TEKSystems&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2021"
              >
                <h2>
                  Systems Architect&emsp;&emsp;|&emsp;&emsp;Remote
                  (Seattle)&emsp;&emsp;|&emsp;&emsp;August 2021 - September 2021
                </h2>
                <br />
                Architected, executed, and load tested migration of enterprise
                ElasticSearch cluster to OpenSearch resulting in a 10% reduction
                of operational costs while maintaining expected performance.
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="BreakBeat Technology&emsp;&emsp;&emsp;2020-2021"
              >
                <h2>
                  Co-Founder&emsp;&emsp;|&emsp;&emsp;Remote
                  (Seattle)&emsp;&emsp;|&emsp;&emsp;August 2021 - September 2021
                </h2>
                <br />
                Assist clients with infrastructure and automation tasks and
                capacity planning to streamline enterprise workflows, improve
                cost savings, and resolve issues with customer SaaS production
                systems.
                <br />
                Utilize Terraform, Ansible, Docker, and public cloud providers.
                Develop initial systems architecture and implementation, cost
                reduction measures, address issues with scaling, and migration
                from traditional hosting providers to public cloud.
                <br />
                Apply pragmatic site reliability engineering principles to
                projects to ensure milestones are achieved within timelines and
                in budget.
                <br />
                <br />
                <hr />
                <br />
                <h2>Notable Outcomes</h2>
                <br />
                <ul>
                  <li>
                    <b>
                      Reduced monthly costs for client on AWS account 15%
                      rewriting existing CDK stack for public government website
                    </b>
                  </li>
                  <li>
                    &emsp;&emsp;• Outlined new product development proposal and
                    budget in partnership with customer
                  </li>
                  <li>
                    &emsp;&emsp;• Coordinated product architecture and tested
                    software controls in data stores prior to deployment
                  </li>
                  <li>
                    &emsp;&emsp;• Added external data center connectivity and
                    serverless functions to automate intake form delivery
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <b>
                      Improved streaming platform&amp;s site response times 300%
                      by implementing application-level monitoring
                    </b>
                  </li>
                  <li>
                    &emsp;&emsp;• Drafted project details and goals and
                    presented outline to operations team for approval
                  </li>
                  <li>
                    &emsp;&emsp;• Optimized inefficient database queries from
                    front end with operational support
                  </li>
                  <li>
                    &emsp;&emsp;• Enhanced customer IaC to implement EC2
                    auto-scaling and scheduled scaling based on traffic patterns
                  </li>
                </ul>
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="Amazon Web Services&emsp;&emsp;&emsp;2016-2020"
              >
                <h2>
                  Developer Support Engineer, SDKs &
                  Tools&emsp;&emsp;|&emsp;&emsp;Seattle,
                  WA&emsp;&emsp;|&emsp;&emsp;July 2016 - August 2020
                </h2>
                <br />
                Spearheaded data driven system configuration projects to improve
                developer support experience and resolve long standing
                operational issues.
                <br />
                Wrote code samples and programming tutorials for PHP and Go
                developer communities.
                <br />
                Used version control services to submit and review code changes
                to fix bugs.
                <br />
                Resolved code-related issues faced by external and internal
                customers utilizing AWS SDKs for PHP and Go.
                <br />
                <br />
                <hr />
                <br />
                <h2>Notable Outcomes</h2>
                <br />
                <ul>
                  <li>
                    <b>
                      Streamlined support systems by creating rule set framework
                      for issues and pull requests from 30+ GitHub repositories
                    </b>
                  </li>
                  <li>
                    &emsp;&emsp;• Coordinated 7 development teams to find common
                    ground on how to resolve aging issues
                  </li>
                  <li>
                    &emsp;&emsp;• Implemented high level logic including
                    workflow, labels, messaging, logging, and timing for
                    auto-closures
                  </li>
                  <li>
                    &emsp;&emsp;• Automated report generation based on KPIs and
                    core metrics for operations teams
                  </li>
                </ul>
                <br />
                <ul>
                  <li>
                    <b>
                      Boosted company profile by offering additional out of
                      scope services to customers
                    </b>
                  </li>
                  <li>
                    &emsp;&emsp;• Researched company service offerings and
                    compared against client needs
                  </li>
                  <li>
                    &emsp;&emsp;• Provided customers with functional code
                    samples to aid in testing and final deployment
                  </li>
                  <li>
                    &emsp;&emsp;• Demonstrated correct usage of AWS SDKs to
                    customers accelerate program implementation
                  </li>
                </ul>
                <br />
                <br />
                <hr />
                <br />
                <h2>
                  Cloud Support Engineer, CDS&emsp;&emsp;|&emsp;&emsp;Seattle,
                  WA&emsp;&emsp;|&emsp;&emsp;February 2017 - June 2018
                </h2>
                <br />
                Provided consistently positive experiences for enterprise-level
                customers solving problems related to AWS Storage and Content
                Delivery services
                <br />
                Worked closely with internal service teams to resolve service
                bugs, implement feature requests, and mitigate customer issues
                <br />
                Debugged unexpected behaviors in AWS CLI and AWS SDKs for Go,
                Python, and PHP by reproducing issues locally and in Lambda and
                Cloud9 test environments
                <br />
                Served as team lead routing cases to team members and escalating
                tickets and feature requests to internal service teams
                <br />
                <br />
                <hr />
                <br />
                <h2>
                  Cloud Support Associate, EC2&emsp;&emsp;|&emsp;&emsp;Seattle,
                  WA&emsp;&emsp;|&emsp;&emsp;July 2016 - February 2017
                </h2>
                <br />
                Assisted in configuration of EC2 instances and associated
                components (storage, networking, DNS, applications)
                <br />
                Guided customers in the development of scripts using the AWS CLI
                to automate EC2 instance administration.
                <br />
                Quickly earned trust of unhappy customers and teammates using
                empathy and confidence
                <br />
                Worked directly with internal service developers to reproduce
                and resolve customer issues
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="IBM Cloud&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2013-2016"
              >
                <h2>
                  Cloud Support Architect&emsp;&emsp;|&emsp;&emsp;Dallas,
                  TX&emsp;&emsp;|&emsp;&emsp;February 2017 - June 2018
                </h2>
                <br />
                Tier 2 & 3 support for worldwide SoftLayer & IBM Cloud systems
                and services
                <br />
                <ul>
                  <li>
                    - Developed process documentation, technical reference
                    documentation, and new hire training materials{' '}
                  </li>
                  <li>
                    - Wrote Bash and Powershell scripts to automate system tasks
                    and metrics reporting.
                  </li>
                  <li>
                    - Deployed, optimized, instructed best practices, and worked
                    closely with software vendors to debug issues for:
                  </li>
                  <li>
                    &emsp;&emsp;• JBOD, RAID, LVM, SAN, NAS, and object-based
                    storage solutions
                  </li>
                  <li>
                    &emsp;&emsp;• Physical and virtual routers, security
                    appliances, and load balancers
                  </li>
                  <li>
                    &emsp;&emsp;• Virtual and bare metal servers spanning Linux,
                    Windows, and mixed environments
                  </li>
                  <li>&emsp;&emsp;• Xen, VMware, and KVM hosts</li>
                  <li>
                    &emsp;&emsp;• REST API implementations to interface with IBM
                    Cloud infrastructure for customer deployments, queries, and
                    automation
                  </li>
                  <li>
                    &emsp;&emsp;• Centralized licensing systems for managed
                    software offerings
                  </li>
                  <li>
                    &emsp;&emsp;• Evault and R1soft managed and unmanaged backup
                    solutions
                  </li>
                  <li>
                    &emsp;&emsp;• Web servers involving Apache, NGINX, IIS,
                    Tomcat, MySQL, MSSQL, and Nimsoft monitoring solutions
                  </li>
                </ul>
              </Collapse>
            </Collapse.Group>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-2/3 divide-x-0 justify-center">
        <div className="px-4 lg:px-0">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Skills
          </h1>
          <br />
          <div className="App container">
            <Collapse.Group className="text-white">
              <Collapse className="text-4xl font-bold" title="Tactical">
                Systems Architecture & Diagramming • IT Strategy • Client
                Relations
                <br />
                Team Management • Hiring • Training • Mentoring
              </Collapse>
              <Collapse className="text-4xl font-bold" title="Domains">
                Research • Reporting • Writing Documentation • Software
                Engineering • CI/CD • IaC
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="Languages & Protocols"
              >
                Go • Python • Typescript • PHP • Bash • Redis • MySQL • NoSQL •
                REST • gRPC • DNS • LAN & WAN
              </Collapse>
              <Collapse className="text-4xl font-bold" title="Platforms">
                AWS • GCP • Azure • Docker • Kubernetes • CDN • Object Storage
              </Collapse>
              <Collapse
                className="text-4xl font-bold"
                title="OS & Virtualization"
              >
                Docker • Kubernetes • Hyper-V • VMWare • ESX • Linux • Unix •
                Windows
              </Collapse>
            </Collapse.Group>
          </div>
        </div>
        <br />
        <br />
        <div className="items-center">
          <div className="px-4 lg:px-0 flex-col">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Education
            </h1>
            <br />
            <div className="App container">
              <Collapse.Group className="text-white">
                <Collapse className="text-4xl font-bold" title="School">
                  <h2>Texas State Technical College; Waco, TX; 2008-2011</h2>
                  <br />
                  <table>
                    <tr>
                      <td>AAS&emsp;</td>
                      <td>
                        Computer Networking & Systems Administration&emsp;
                      </td>
                      <td>2010</td>
                    </tr>
                    <tr>
                      <td>AAS</td>
                      <td>Network Security Technology</td>
                      <td>2011</td>
                    </tr>
                  </table>
                  Activities and societies: SkillsUSA, Phi Theta Kappa
                  <br />
                  <br />
                  <h2>Naples American High School; Naples, Italy; 2004-2008</h2>
                </Collapse>
                <Collapse className="text-4xl font-bold" title="Certs">
                  <table>
                    <tr>
                      <td>Google&emsp;</td>
                      <td>Google Cloud Professional DevOps Engineer&emsp;</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>CompTIA&emsp;</td>
                      <td>Security+&emsp;</td>
                      <td>2010</td>
                    </tr>
                    <tr>
                      <td>CompTIA&emsp;</td>
                      <td>Network+&emsp;</td>
                      <td>2008</td>
                    </tr>
                  </table>
                </Collapse>
              </Collapse.Group>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
