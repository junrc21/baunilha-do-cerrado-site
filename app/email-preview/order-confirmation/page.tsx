import type { Metadata } from "next";
import { OrderConfirmationEmail } from "@/components/emails/order-confirmation-email";

export const metadata: Metadata = {
  title: "Preview — E-mail de Confirmação de Pedido",
  description: "Preview do template de e-mail de confirmação de pedido da Baunilha do Cerrado.",
};

export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] py-10">
      <div className="max-w-3xl mx-auto px-4">
        {/* Preview header */}
        <div className="bg-[#1a1a1a] rounded-t-xl p-4 flex items-center gap-3 border border-[#333]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-[#2a2a2a] rounded-md px-3 py-1.5 text-center">
            <span className="text-[#888] text-xs">Email Preview — Baunilha do Cerrado</span>
          </div>
        </div>

        {/* Email client simulation */}
        <div className="bg-white border border-[#333] border-t-0">
          <div className="bg-[#f5f5f5] border-b border-[#e0e0e0] p-4 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#888] w-14 text-right">De:</span>
              <span className="text-[12px] text-[#333]">Baunilha do Cerrado &lt;pedidos@baunilhadocerrado.com.br&gt;</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#888] w-14 text-right">Para:</span>
              <span className="text-[12px] text-[#333]">Laura Silva &lt;laura@email.com&gt;</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#888] w-14 text-right">Assunto:</span>
              <span className="text-[12px] font-medium text-[#333]">Recebemos seu pedido com carinho ✨</span>
            </div>
          </div>

          {/* Email body */}
          <OrderConfirmationEmail
            customerName="Laura"
            orderNumber="#BC-2026-0042"
            items={[
              {
                name: "Lata Vermelha — 6 cookies sortidos",
                description: "Chocolate Belga, Churros com Doce de Leite, Beijinho de Coco, Red Velvet, Clássico ×2",
                price: "R$ 98,00",
              },
              {
                name: "Teddy Bear",
                description: "Complemento do presente",
                price: "R$ 59,00",
              },
              {
                name: "Cartão com Mensagem",
                description: "Inclui cartão refinado com logo da confeitaria",
                price: "R$ 15,00",
              },
            ]}
            subtotal="R$ 172,00"
            delivery="R$ 15,00"
            total="R$ 187,00"
            cardMessage="Com carinho, para tornar seu dia ainda mais doce e especial."
            whatsappUrl="https://wa.me/5561999999999"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-b-xl p-3 border border-[#333] border-t-0 text-center">
          <span className="text-[#666] text-[11px]">Preview do template de e-mail — Baunilha do Cerrado</span>
        </div>
      </div>

      {/* Info */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <p className="text-[#c89a57] text-[11px] tracking-widest uppercase font-medium mb-3">
            Template info
          </p>
          <p className="text-[#888] text-sm mb-2">
            Arquivo: <code className="text-[#c89a57]">components/emails/order-confirmation-email.tsx</code>
          </p>
          <p className="text-[#888] text-sm mb-2">
            Assunto: <span className="text-white">"Recebemos seu pedido com carinho ✨"</span>
          </p>
          <p className="text-[#888] text-sm">
            Compatível com clients de e-mail: Gmail, Outlook, Apple Mail
          </p>
        </div>
      </div>
    </div>
  );
}
