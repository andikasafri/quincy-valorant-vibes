import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import SectionTitle from "./SectionTitle"

const ConnectSection = () => {
  return (
    <section id="connect" className="py-20 bg-valorant-dark/90">
      <div className="container mx-auto px-4">
        <SectionTitle title="Connect With Us" />
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-valorant-dark/50 p-8 rounded-lg w-full">
            <iframe
              src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID"
              width="100%"
              height="500"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="bg-valorant-dark/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-valorant-dark/30 border-valorant-gray/30 text-valorant-light"
              />
              <Textarea
                placeholder="Your message"
                rows={6}
                className="bg-valorant-dark/30 border-valorant-gray/30 text-valorant-light"
              />
              <Button
                type="submit"
                className="w-full bg-valorant-red text-white font-bold hover:bg-valorant-red/80 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection