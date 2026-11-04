import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CR7 – The GOAT Journey | Cristiano Ronaldo Storytelling Archive",
  description:
    "An immersive tribute chronicling Cristiano Ronaldo's unmatched journey from Madeira to world football supremacy. Data, iconic videos, records, family roots, and how he answered every critic.",
  keywords: [
    "Cristiano Ronaldo",
    "CR7",
    "GOAT",
    "Champions League",
    "Ballon d'Or",
    "Football",
    "Real Madrid",
    "Manchester United",
    "Juventus",
    "Portugal",
    "Al Nassr",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark h-full antialiased selection:bg-amber-500/30 selection:text-amber-200"
    >
      <head>
        {/* Prevent hydration mismatches caused by browser extensions (e.g. Urban VPN injecting bis_skin_checked) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(node) {
                    if (node && node.nodeType === 1) {
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.hasAttribute('bis_register')) node.removeAttribute('bis_register');
                    }
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        var name = m.attributeName;
                        if (name && (name === 'bis_skin_checked' || name === 'bis_register' || name.indexOf('__processed_') === 0)) {
                          m.target.removeAttribute(name);
                        }
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          clean(m.addedNodes[j]);
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    childList: true,
                    subtree: true
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
