"use client";
import { Button } from "@/features/design-system/components/ui/button";
import { MainLayout } from "@/features/shared/components/layout";
import type { Section } from "@/features/terms";
import { TermsPanel, TermsSidebar } from "@/features/terms";
import {
  AlertTriangle,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Download,
  Receipt,
  Share2,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function TermsPage() {
  const sections = useMemo<Section[]>(
    () => [
      {
        id: "reservation",
        title: "Réservation & Engagement",
        description: [
          "La réservation d’un voyage ou d’autres prestations peut se faire à notre bureau, par téléphone ou e‑mail. Une confirmation claire et complète de l’itinéraire et des prestations vous est envoyée après validation.",
          "L’engagement ne prend effet qu’à la réception de l’acompte demandé. Une facture proforma vous sera expédiée dès confirmation de la prestation.",
        ],
        sidebarText:
          "Réservation possible en bureau, par téléphone ou e‑mail, confirmée par facture proforma.",
        icon: <CalendarCheck2 className="h-5 w-5" />,
      },
      {
        id: "assurance",
        title: "Assurance",
        description: [
          "Notre agence Madabest a souscrit une assurance en responsabilité civile professionnelle auprès de la compagnie NY HAVANA, couvrant les risques liés à l’exercice de nos activités. Cependant, cette couverture ne comprend pas les évacuations sanitaires, ni les assurances assistance, annulation ou multirisque voyage. Nous recommandons vivement à chaque voyageur de souscrire, auprès de son assureur habituel, une police d’assurance adaptée (assistance médicale, rapatriement, perte de bagages, annulation, etc.) afin de voyager en toute sérénité.",
        ],
        sidebarText:
          "Responsabilité civile incluse, assurances voyage complémentaires à votre charge.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        id: "prix",
        title: "Prix",
        description: [
          "Pour les règlements de facture, en Ariary, le tarif sera calculé en fonction du cours de l’euro du jour où le paiement sera effectué. La validité des tarifs annoncés dans le référentiel de prix ou sur notre site web est pour l’année en cours. En générale, nous mentionnons les détails des dépenses inclus dans le prix. Les pourboires et boissons ne sont pas compris dans les prix. Des réductions sur certaines prestations sont prévus pour les enfants moins de 10 ans.",
        ],
        sidebarText:
          "Les tarifs pourront être révisés à la hausse qu’à la baisse, si des changements majeures de l’extérieur de notre entité interviennent, comme :.",
        icon: <Tag className="h-5 w-5" />,
      },
      {
        id: "reglement",
        title: "Règlement",
        description: [],
        sidebarText: "Un acompte de 20 % à la réservation, solde à régler 30 jours avant départ.",
        icon: <Receipt className="h-5 w-5" />,
      },
      {
        id: "annulation",
        title: "Annulation",
        description: ["En cas d’annulation, nous demandons au client selon les cas suivant :"],
        sidebarText:
          "Frais variables selon la date d’annulation, jusqu’à 100 % à 7 jours du départ.",
        icon: <AlertTriangle className="h-5 w-5" />,
      },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const atStart = activeIdx <= 0;
  const atEnd = activeIdx >= sections.length - 1;

  return (
    <div className="min-h-screen bg-[#FFF6E4]">
      <MainLayout>
        <main className="mx-auto w-full max-w-7xl px-4">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full lg:h-[309px]">
              {/* Desktop: follow exact Figma positioning */}
              <h1
                className="absolute hidden text-[48px] leading-[69px] font-medium text-[#0D0D0D] lg:z-10 lg:block"
                style={{
                  width: "563px",
                  height: "137px",
                  left: "calc(50% - 253px/2 - 373.5px)",
                  top: "152px",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Conditions générales de réservation et d’annulation
              </h1>
              {/* Mobile/Tablet fallback: normal flow */}
              <h1 className="block text-3xl leading-9 font-medium text-[#0D0D0D] lg:hidden">
                Conditions générales de réservation et d’annulation
              </h1>
            </div>
            <div className="flex items-center gap-10 text-sm font-medium text-[#0D0D0D] lg:pt-50">
              <button
                type="button"
                className="group flex items-center gap-2 focus:outline-none"
                aria-label="Télécharger les conditions en PDF"
              >
                <span className="whitespace-nowrap">Télécharger les conditions en PDF</span>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 15V1.5M6 16.5H3C2.60218 16.5 2.22064 16.658 1.93934 16.9393C1.65804 17.2206 1.5 17.6022 1.5 18V24C1.5 24.3978 1.65804 24.7794 1.93934 25.0607C2.22064 25.342 2.60218 25.5 3 25.5H24C24.3978 25.5 24.7794 25.342 25.0607 25.0607C25.342 24.7794 25.5 24.3978 25.5 24V18C25.5 17.6022 25.342 17.2206 25.0607 16.9393C24.7794 16.658 24.3978 16.5 24 16.5H21M19.5 9L13.5 16.5L7.5 9M21 21H21.015"
                    stroke="#E2531F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="group flex items-center gap-2 focus:outline-none"
                aria-label="Partager les conditions"
              >
                <span className="whitespace-nowrap">Partager</span>
                <svg
                  width="30"
                  height="27"
                  viewBox="0 0 30 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.5605 12.4392L17.5605 0.43918C17.3507 0.229466 17.0835 0.0866566 16.7925 0.0288052C16.5016 -0.0290461 16.2001 0.000658426 15.926 0.114163C15.652 0.227669 15.4177 0.419878 15.2529 0.666493C15.0881 0.913107 15.0001 1.20305 15 1.49968V6.81718C10.9024 7.19637 7.09384 9.09097 4.31954 12.1302C1.54523 15.1695 0.0049076 19.1346 0 23.2497V25.4997C0.000236784 25.811 0.0973645 26.1146 0.277911 26.3683C0.458458 26.622 0.713474 26.8132 1.00759 26.9154C1.3017 27.0176 1.62034 27.0258 1.91929 26.9387C2.21825 26.8517 2.48271 26.6738 2.676 26.4297C4.14577 24.6824 5.94891 23.2454 7.98015 22.2026C10.0114 21.1598 12.23 20.5321 14.5065 20.3562C14.5815 20.3472 14.769 20.3322 15 20.3172V25.4997C15.0001 25.7963 15.0881 26.0863 15.2529 26.3329C15.4177 26.5795 15.652 26.7717 15.926 26.8852C16.2001 26.9987 16.5016 27.0284 16.7925 26.9706C17.0835 26.9127 17.3507 26.7699 17.5605 26.5602L29.5605 14.5602C29.8417 14.2789 29.9997 13.8974 29.9997 13.4997C29.9997 13.1019 29.8417 12.7205 29.5605 12.4392ZM18 21.8787V18.7497C18 18.3519 17.842 17.9703 17.5607 17.689C17.2794 17.4077 16.8978 17.2497 16.5 17.2497C16.1175 17.2497 14.556 17.3247 14.157 17.3772C10.1142 17.7493 6.26591 19.2852 3.078 21.7992C3.43987 18.4908 5.00931 15.4322 7.48583 13.2089C9.96235 10.9856 13.1719 9.75395 16.5 9.74968C16.8978 9.74968 17.2794 9.59164 17.5607 9.31034C17.842 9.02904 18 8.6475 18 8.24968V5.12068L26.379 13.4997L18 21.8787Z"
                    fill="#E2531F"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section className="relative -mx-4 rounded-[25px] bg-[#FFE2D7] p-3 px-7 py-4 sm:-mx-8 sm:p-4 lg:-mx-14 lg:p-5 xl:-mx-20 2xl:-mx-28">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <aside className="lg:col-span-3">
                <TermsSidebar
                  sections={sections}
                  activeIdx={activeIdx}
                  onSelect={(i) => setActiveIdx(i)}
                />
              </aside>
              <div className="lg:col-span-9">
                <TermsPanel section={sections[activeIdx]} />
              </div>
            </div>
            {/* Bottom-right nav buttons */}
            <div className="mt-4 flex items-center justify-end gap-2 lg:absolute lg:right-5 lg:bottom-4">
              <Button
                size="sm"
                disabled={atStart}
                aria-disabled={atStart}
                className={`rounded px-4 py-2 text-white ${atStart ? "cursor-not-allowed bg-[rgba(226,83,31,0.2)] opacity-60" : "bg-[rgba(226,83,31,0.4)] hover:opacity-90"}`}
                onClick={() => {
                  if (!atStart) setActiveIdx((i) => Math.max(0, i - 1));
                }}
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Précédent
              </Button>
              <Button
                size="sm"
                disabled={atEnd}
                aria-disabled={atEnd}
                className={`rounded text-white ${atEnd ? "cursor-not-allowed bg-[rgba(226,83,31,0.2)] opacity-60" : "bg-[#E2531F] hover:bg-[#d64a2e]"}`}
                onClick={() => {
                  if (!atEnd) setActiveIdx((i) => Math.min(sections.length - 1, i + 1));
                }}
              >
                Suivant <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </section>
        </main>
      </MainLayout>
    </div>
  );
}
