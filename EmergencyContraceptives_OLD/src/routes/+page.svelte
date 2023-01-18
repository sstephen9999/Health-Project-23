<script lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@rgossiaux/svelte-headlessui";
  let quizStatus = "ready";
</script>

<div>
  <nav class="shadow-md">
    <div class="max-w-screen-md mx-auto p-2 ">
      <h1 class="sm:text-4xl text-2xl font-bold">EmergencyContraceptives</h1>
    </div>
  </nav>
  <main class="max-w-screen-md mx-auto p-2 mt-5">
    <section id="quiz">
      <h2 class="sm:text-3xl text-2xl font-bold">
        Find Your Emergency Contraception Quiz
      </h2>
      <div class="sm:p-12">
        {#if quizStatus === "ready"}
          <button
            class="bg-violet-200 mt-2 rounded-md aspect-video w-full shadow-md hover:shadow-lg transition-all ease-linear duration-200 flex justify-center items-center"
            on:click={() => (quizStatus = "pregnant")}
          >
            <span
              class="material-symbols-outlined text-violet-400 text-6xl hover:scale-105 transition-all duration-200 ease-linear"
            >
              play_circle
            </span>
          </button>
        {:else}
          <div
            class="bg-violet-200 mt-2 p-2 rounded-md aspect-video w-full shadow-md hover:shadow-lg transition-all ease-linear duration-200 flex justify-center items-center text-center relative"
          >
            <button
              class="absolute bottom-4 right-4 material-symbols-outlined"
              on:click={() => (quizStatus = "pregnant")}
            >
              refresh
            </button>

            <div>
              {#if quizStatus === "pregnant"}
                <h2 class="text-3xl font-bold">Are you currently pregnant?</h2>
                <div class="flex justify-center gap-2 mt-4">
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 rounded-md text-xl"
                    on:click={() => (quizStatus = "sex")}>Yes</button
                  >
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 rounded-md text-xl"
                    on:click={() => (quizStatus = "notPregnant")}>No</button
                  >
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 rounded-md text-xl"
                    on:click={() => (quizStatus = "unsurePregnant")}
                    >Unsure</button
                  >
                </div>
              {:else if quizStatus === "sex"}
                <h2 class="text-3xl font-bold">
                  Unfortunately, emergency contraceptives will not work if you
                  are already pregnant. However, <a
                    href="#otherOptions"
                    class="text-violet-800">click here</a
                  > to view other options that might be available for you.
                </h2>
                <button
                  class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 mt-4 rounded-md text-xl"
                  on:click={() => (quizStatus = "pregnant")}
                >
                  Restart quiz
                </button>
              {:else if quizStatus === "unsurePregnant"}
                <h2 class="sm:text-3xl text-sm font-bold">
                  If you are unsure if you are pregnant. We recommend you take a
                  pregnancy test.
                </h2>
                <h2 class="sm:text-2xl text-sm">
                  Pregnancy tests can be purchased over the counter at your
                  local drug store. If you are unable to purchase a pregnancy
                  test, you can contact your local health department or Planned
                  Parenthood to see if they can provide you with one.
                </h2>
                <div class="flex justify-center gap-4">
                  <a
                    href="#pregnancyTest"
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 mt-4 rounded-md text-xl"
                    >More info</a
                  >
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 mt-4 rounded-md text-xl"
                    on:click={() => (quizStatus = "pregnant")}
                  >
                    Restart quiz
                  </button>
                </div>
              {:else if quizStatus === "notPregnant"}
                <h2 class="text-3xl font-bold">
                  Have you had unprotected sexual intercourse in the past 72
                  hours?
                </h2>
                <div class="flex justify-center gap-2 mt-4">
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 rounded-md text-xl"
                    on:click={() => (quizStatus = "yesSex")}>Yes</button
                  >
                  <button
                    class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 rounded-md text-xl"
                    on:click={() => (quizStatus = "noSex")}>No</button
                  >
                </div>
              {:else if quizStatus === "noSex"}
                <h2 class="sm:text-3xl text-xl font-bold">
                  It looks like you've missed the 72-hour window to Plan B.
                  Luckily, there are still other options available for you.
                  <a href="#otherOptions" class="text-violet-800">Click here</a>
                  to view them.
                </h2>
                <button
                  class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 mt-4 rounded-md text-xl"
                  on:click={() => (quizStatus = "pregnant")}
                >
                  Restart quiz
                </button>
              {:else if quizStatus === "yesSex"}
                <h2 class="sm:text-3xl text-xl font-bold">
                  It looks like you still have time to take an emergency
                  contraceptive! <a
                    href="#emergencyContraceptives"
                    class="text-violet-800">Click here</a
                  > to view available emergency contraceptives.
                </h2>
                <button
                  class="px-4 py-1 transition-all ease-linear duration-200 hover:shadow-lg shadow-md bg-violet-300 mt-4 rounded-md text-xl"
                  on:click={() => (quizStatus = "pregnant")}
                >
                  Restart quiz
                </button>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </section>
    <section id="emergencyContraceptives" class="mt-5">
      <h2 class="sm:text-3xl text-2xl font-bold">Emergency Contraceptives</h2>
      <div class="mt-2">
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md"
              >
                Plan B
              </h3>
            </div></DisclosureButton
          >

          <DisclosurePanel class="mt-2">
            <p>
              Plan B, also known as levonorgestrel, is a progestin-only pill
              that works by delaying ovulation, the release of an egg from the
              ovary.
            </p>
            <br />
            <p>
              Plan B can be taken up to 72 hours after unprotected intercourse,
              but it is most effective when taken as soon as possible. It can be
              found over the counter in most pharmacies.
            </p>
            <br />
            <p>
              Plan B is generally well-tolerated and side effects are usually
              mild. The most common side effects include nausea, abdominal pain,
              and headaches.
            </p>
            <br />
            <a
              href="https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-plan-b-morning-after-pill"
              class="text-violet-700">More Information</a
            >
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                Ella
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              Ella, also known as ulipristal acetate, is a a progestin-receptor
              modulator that works by delaying ovulation, the release of an egg
              from the ovary.
            </p>
            <br />
            <p>
              Ella can be taken up to 120 hours after unprotected intercourse,
              but it is most effective when taken as soon as possible. It
              requires a prescription and it's availability may vary depending
              on the region. It is important to note that Ella is not the same
              as the abortion pill and it cannot terminate an existing
              pregnancy.
            </p>
            <br />
            <p>
              Ella is generally well-tolerated, but it may cause side effects
              such as headaches, nausea, abdominal pain and fatigue. Long-term
              use of Ella is not recommended and it should only be used in
              emergency situations.
            </p>
            <br />
            <a
              href="https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-ella-morning-after-pill"
              class="text-violet-700">More Information</a
            >
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                IUD
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              A Copper IUD (intrauterine device) is a small, T-shaped device
              that is inserted into the uterus by a healthcare provider. It is a
              form of long-acting and reversible birth control that can provide
              effective contraception for up to 10-12 years, depending on the
              brand.
            </p>
            <br />
            <p>
              The Copper IUD works by releasing small amounts of copper into the
              uterus, which creates an environment that is toxic to sperm and
              eggs, preventing fertilization. It is over 99% effective in
              preventing pregnancy, making it one of the most effective methods
              of birth control.
            </p>
            <br />
            <p>
              The Copper IUD is inserted by a healthcare provider, and the
              procedure is typically done in the office or clinic. It is
              typically inserted within 5 days of unprotected intercourse as
              emergency contraceptive, but it can also be used as regular birth
              control method. After the insertion, the healthcare provider will
              give instructions on how to check the strings that hang down from
              the IUD, to make sure it's still in place, and schedule follow-up
              visits to monitor the device.
            </p>
            <br />
            <a
              href="https://www.mayoclinic.org/tests-procedures/paragard/about/pac-20391270"
              class="text-violet-700">More Information</a
            >
          </DisclosurePanel>
        </Disclosure>
      </div>
    </section>
    <section id="pregnancyTest" class="mt-5">
      <h2 class="text-3xl font-bold">Pregnancy Tests</h2>
      <div>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                How do they work?
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              Pregnancy tests detect the presence of a hormone called human
              chorionic gonadotropin (hCG) in a woman's urine. This hormone is
              produced by the placenta after a fertilized egg implants in the
              uterus, signaling that a woman is pregnant.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                How accurate are they?
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              Urine tests are typically more than 99% accurate when used
              correctly. However, the accuracy can decrease if the test is taken
              too early, before a woman's hCG levels have risen enough to be
              detected.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                How soon can I get them?
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              Urine tests can detect pregnancy as early as the first day of a
              missed period. However, if you test too early, before your hCG
              levels have risen enough to be detected, you may get a false
              negative result. If you test before the first day of your missed
              period and get a negative result, it's recommended to wait a few
              days and then test again.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            ><div class="flex">
              <h3
                class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
              >
                Where can I get them?
              </h3>
            </div></DisclosureButton
          >
          <DisclosurePanel class="mt-2">
            <p>
              Urine tests can be purchased over the counter from a variety of
              sources such as pharmacies, grocery stores, and drug stores. They
              are also available online.
            </p></DisclosurePanel
          >
        </Disclosure>
      </div>
    </section>
    <section id="otherOptions" class="mt-5">
      <h2 class="text-3xl font-bold">Other Options</h2>
      <Disclosure>
        <DisclosureButton
          ><div class="flex">
            <h3
              class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
            >
              Parenting
            </h3>
          </div></DisclosureButton
        >
        <DisclosurePanel class="mt-2">
          <p>
            This option involves carrying the pregnancy to term and raising the
            child. This can include giving birth and raising the child as a
            single parent or co-parenting with the father.
          </p></DisclosurePanel
        >
      </Disclosure>
      <Disclosure>
        <DisclosureButton
          ><div class="flex">
            <h3
              class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
            >
              Abortion
            </h3>
          </div></DisclosureButton
        >
        <DisclosurePanel class="mt-2">
          <p>
            This option involves ending the pregnancy, either surgically or
            through medication. Abortion is a legal and safe procedure, but laws
            and access to abortion vary by region. It's important to consult
            with a healthcare professional and to consider the physical and
            emotional implications of the decision.
          </p></DisclosurePanel
        >
      </Disclosure>
      <Disclosure>
        <DisclosureButton
          ><div class="flex">
            <h3
              class="text-2xl bg-violet-200 px-4 py-1 rounded-md transition-all duration-200 ease-linear hover:shadow-lg shadow-md mt-2"
            >
              Adoption
            </h3>
          </div></DisclosureButton
        >
        <DisclosurePanel class="mt-2">
          <p>
            This option involves giving birth and placing your child with
            another person or family permanently. Adoption is a legal process
            that varies by region. It's important to consult with a healthcare
            professional and to consider the physical and emotional implications
            of the decision.
          </p></DisclosurePanel
        >
      </Disclosure>
    </section>
    <section id="references" class="mt-5 pb-20">
      <h2 class="text-3xl font-bold">References</h2>
      <div class="flex flex-col gap-4 mt-2  break-words">
        <a
          href="https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-plan-b-morning-after-pill"
          class="text-violet-700  "
          >https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-plan-b-morning-after-pill</a
        >
        <a
          href="https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-ella-morning-after-pill"
          class="text-violet-700 "
          >https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-ella-morning-after-pill</a
        >
        <a
          href="https://www.mayoclinic.org/tests-procedures/paragard/about/pac-20391270"
          class="text-violet-700 "
          >https://www.mayoclinic.org/tests-procedures/paragard/about/pac-20391270</a
        >
        <a
          href="https://my.clevelandclinic.org/health/articles/9703-pregnancy-tests"
          class="text-violet-700 "
          >https://my.clevelandclinic.org/health/articles/9703-pregnancy-tests</a
        >
        <a
          href="https://www.plannedparenthood.org/learn/pregnancy/pregnancy-options"
          class="text-violet-700"
          >https://www.plannedparenthood.org/learn/pregnancy/pregnancy-options</a
        >
      </div>
    </section>
  </main>
</div>
