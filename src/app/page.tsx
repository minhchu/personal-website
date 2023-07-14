"use client";

import { css, cx } from "~/styled-system/css";
import { motion } from "framer-motion";
import Image from "next/image";
import programmingIllustration from "./undraw_programming.svg";
import { flex, grid } from "~/styled-system/patterns";
import { ExternalLink, Mail } from "lucide-react";
import githubIcon from "./github-mark.svg";

const WavingHand = () => {
  return (
    <motion.div
      style={{
        marginBottom: "-20px",
        marginRight: "-45px",
        paddingBottom: "20px",
        paddingRight: "45px",
        display: "inline-block",
      }}
      animate={{ rotate: 20 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.2,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      👋
    </motion.div>
  );
};

const containerStyle = css({ maxW: "8xl", marginX: "auto", px: 4 });

export default function Home() {
  return (
    <main
      className={cx(
        flex({ direction: "column" }),
        css({ w: "100%", minH: "100vh", bg: "gray.100" })
      )}
    >
      <header
        className={cx(
          css({
            position: "fixed",
            w: "100%",
            py: 4,
            zIndex: 10,
            bgColor: "rgba(243,244,246,0.8)",
            backdropFilter: "blur(4px)",
          })
        )}
      >
        <div
          className={cx(
            flex({ justify: "space-between", align: "center" }),
            css({ px: { base: 4, sm: 16 } }),
            containerStyle
          )}
        >
          <a
            href="https://docs.google.com/document/d/1yylCeivtB9ErNDhtammr8oOu12ZfUaaO44ZcMzvncDQ/edit?usp=sharing"
            className={css({ fontSize: "lg" })}
            target="_blank"
            rel="noreferrer"
          >
            My Resume{" "}
            <ExternalLink
              size={16}
              className={css({ display: "inline-block", mt: "-6px" })}
            />
          </a>
          <div>
            <a
              href="https://github.com/minhchu"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={githubIcon}
                alt="Github"
                className={css({ w: 9, h: 9 })}
              />
            </a>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className={cx(
          grid({ columns: { base: 1, sm: 2 }, gap: 8 }),
          css({
            px: { base: 4, sm: 16 },
            py: { base: 4, sm: 32 },
            minH: "100vh",
          }),
          containerStyle
        )}
      >
        <div
          className={cx(
            flex({ direction: "column" }),
            css({ mt: { base: 32, sm: 48 } })
          )}
        >
          <h1 className={css({ fontWeight: 700, fontSize: "48px" })}>
            Greetings
            <WavingHand />,
          </h1>
          <p
            className={css({
              fontWeight: 400,
              fontSize: "24px",
              mt: 4,
            })}
          >
            I am Minh. As a full-stack developer proficient in{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
            <strong>Laravel</strong>, I specialize in crafting seamless web
            experiences from start to finish.
          </p>
          <div className={css({ mt: 4 })}>
            <a
              href="mailto:scsilver94@gmail.com"
              className={css({
                display: "inline-block",
                borderRadius: "md",
                bgColor: "gray.700",
                color: "white",
                fontWeight: 500,
                fontSize: "xl",
                px: 4,
                py: 4,
                _hover: {
                  bgColor: "gray.800",
                },
              })}
            >
              <Mail className={css({ display: "inline-block", mt: "-6px" })} />{" "}
              Contact me
            </a>
          </div>
        </div>
        <div className={css({ mt: { base: 0, sm: 24 } })}>
          <Image src={programmingIllustration} alt="Illustration" />
        </div>
      </section>
    </main>
  );
}
